import { useReducer } from "react";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Modal from "react-modal";

import { Header, Footer, Product, Button } from "@/components";

import { TransformedProduct } from "@/services";

import { getMockedCartProducts } from "@/constants/mocked-cart-products";
import { useCart } from "@/hooks";

enum CartActionKind {
    quantityUpdate = "q_update",
    remove = "p_remove",
}

interface CartState {
    products: ReturnType<typeof getCurrentItemsInCart>;
    totalPrice: number;
}

interface CartAction {
    type: CartActionKind;

    payload: {
        productId: string;
        quantity?: number;
    };
}

const cartReducer = (cartState: CartState, action: CartAction) => {
    const { products } = cartState;

    switch (action.type) {
        case CartActionKind.quantityUpdate: {
            const { payload } = action;

            if (!payload.quantity) {
                return cartState;
            }

            const updatedProducts = products.map((product) => {
                if (product.id === payload.productId) {
                    product.quantity = payload.quantity!;
                }

                return product;
            });

            const newTotal = calculateTotalCartPrice(updatedProducts);

            return {
                ...cartState,
                products: updatedProducts,
                totalPrice: newTotal,
            };
        }

        case CartActionKind.remove: {
            const { payload } = action;

            const updatedProducts = products.filter(
                (product) => product.id !== payload.productId
            );

            const newTotal = calculateTotalCartPrice(updatedProducts);

            return {
                ...cartState,
                products: updatedProducts,
                totalPrice: newTotal,
            };
        }

        default: {
            return cartState;
        }
    }
};

const calculateTotalCartPrice = (products: CartState["products"]) =>
    products.reduce<number>((acc, curr) => {
        return acc + Number(curr.variants?.amount) * curr.quantity;
    }, 0);

// TODO: return not mocked items
const getCurrentItemsInCart = () => {
    return getMockedCartProducts().map((mockedProduct) => ({
        ...mockedProduct,
        quantity: 2,
    }));
};

const Cart: NextPage = () => {
    const { error, cart, isLoading } = useCart();

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
                                    onProductRemove={(productId: string) => {
                                        // dispatch({
                                        //     type: CartActionKind.remove,
                                        //     payload: { productId },
                                        // });
                                        return null;
                                    }}
                                    onQuantityUpdate={(
                                        productId: string,
                                        quantity: number
                                    ) => {
                                        // dispatch({
                                        //     type: CartActionKind.quantityUpdate,
                                        //     payload: { productId, quantity },
                                        // });
                                        return null;
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
