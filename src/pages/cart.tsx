import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Modal from "react-modal";

import { Header, Footer, Product, Button } from "@/components";

import { useCart } from "@/hooks";

// const calculateTotalCartPrice = (products: CartState["products"]) =>
//     products.reduce<number>((acc, curr) => {
//         return acc + Number(curr.price?.amount) * curr.quantity;
//     }, 0);

const Cart: NextPage = () => {
    const { error, cart, isLoading, updateItem, removeItem } = useCart();

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
                                <Button className="w-full">Към магазин</Button>
                            </Link>
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
                                    calculatedPrice={
                                        line.quantity *
                                        Number(line.price.amount)
                                    }
                                    onProductRemove={async (
                                        productId: string
                                    ) => {
                                        await removeItem(productId);
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
                                <p>## BGN</p>
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
