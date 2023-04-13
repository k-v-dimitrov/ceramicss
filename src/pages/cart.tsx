import { useState } from "react";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Modal from "react-modal";

import { CartType } from "@/services";
import { Header, Footer, Product, Button } from "@/components";

import { useCart } from "@/hooks";

const calculateTotalCartPrice = (lines?: NonNullable<CartType>["lines"]) => {
    if (!lines) {
        return 0;
    }

    return lines.reduce<number>((acc, curr) => {
        return acc + Number(curr.price.amount) * curr.quantity;
    }, 0);
};

const Cart: NextPage = () => {
    const { cart, isLoading, updateItem, removeItem } = useCart();

    const [removeIncentive, setRemoveIncentive] = useState<{
        modalShown: boolean;
        productId: string;
    } | null>(null);

    return (
        <div className="container m-auto">
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {isLoading && <h1>Loading...</h1>}

            {!isLoading && (
                <>
                    <Modal
                        isOpen={!cart?.hasItems}
                        className="bg-black bg-opacity-50 h-full outline-none flex justify-center items-center"
                        ariaHideApp={false}
                    >
                        <div className="bg-gray-200 rounded-lg h-fit p-5 w-1/3 mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-6">
                                Количката е празна
                            </h2>

                            <Link href="/collections">
                                <Button className="w-full bg-primary-500 font-bold text-white">
                                    Към магазин
                                </Button>
                            </Link>
                        </div>
                    </Modal>

                    <Modal
                        isOpen={
                            (removeIncentive &&
                                removeIncentive.modalShown &&
                                removeIncentive.productId &&
                                true) ||
                            false
                        }
                        className="bg-black bg-opacity-50 h-full outline-none flex justify-center items-center"
                        ariaHideApp={false}
                    >
                        <div className="bg-gray-200 rounded-lg h-fit p-10 mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-6">
                                Премахване на този продукт?
                            </h2>

                            <div className="flex gap-4 justify-center">
                                <Button
                                    className="text-primary-500 bg-white"
                                    onClick={async () => {
                                        await removeItem(
                                            removeIncentive!.productId
                                        );

                                        window.location.reload();
                                    }}
                                >
                                    Премахни
                                </Button>

                                <Button
                                    onClick={() => setRemoveIncentive(null)}
                                >
                                    Откажи
                                </Button>
                            </div>
                        </div>
                    </Modal>

                    <h1 className="text-4xl text-primary-500 font-bold">
                        Количка
                    </h1>

                    <section className="grid grid-cols-2">
                        <div>
                            {cart?.lines.map((line) => (
                                <Product.ListItem
                                    key={line.id}
                                    line={line}
                                    selectedQuantity={line.quantity}
                                    onProductRemove={async (
                                        productId: string
                                    ) => {
                                        setRemoveIncentive({
                                            modalShown: true,
                                            productId,
                                        });
                                    }}
                                    onQuantityUpdate={async (
                                        productId: string,
                                        quantity: number
                                    ) => {
                                        await updateItem({
                                            id: productId,
                                            quantity,
                                        });
                                    }}
                                />
                            ))}
                        </div>

                        <div className="bg-gray-200 rounded-lg h-fit p-5 w-2/3 mx-auto">
                            <h2 className="text-2xl font-bold">
                                Информация за поръчката
                            </h2>
                            <div className="flex justify-between my-8 text-gray-800 text-lg">
                                <p>Междинна сума</p>
                                <p>
                                    {calculateTotalCartPrice(cart?.lines)} BGN
                                </p>
                            </div>

                            <a
                                href={cart?.checkoutUrl}
                                className="bg-primary-500 font-bold text-white px-6 py-2 rounded-lg block w-full text-center"
                            >
                                Продължи
                            </a>
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </div>
    );
};

export default Cart;
