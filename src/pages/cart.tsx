import { useReducer } from "react";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Modal from "react-modal";

import { Header, Footer, Product, Button } from "@/components";

import { ProductType } from "@/services";

import { getMockedCartProducts } from "@/constants/mocked-cart-products";

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
        return acc + Number(curr.price?.amount) * curr.quantity;
    }, 0);

// TODO: return not mocked items
const getCurrentItemsInCart = () => {
    return getMockedCartProducts().map((mockedProduct) => ({
        ...mockedProduct,
        quantity: 2,
    }));
};

const Cart: NextPage = () => {
    const productsInCart = getCurrentItemsInCart();

    const [cart, dispatch] = useReducer(cartReducer, {
        products: productsInCart,
        totalPrice: calculateTotalCartPrice(productsInCart),
    });

    const hasItemsInCart = cart.products.length > 0;

    return (
        <div className="container m-auto">
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Modal
                isOpen={!hasItemsInCart}
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

            <h1 className="text-4xl text-primary-500 font-bold">Количка</h1>
            <section className="grid grid-cols-2">
                <div>
                    {cart.products.map((product) => (
                        <Product.ListItem
                            key={product.id}
                            product={product as ProductType}
                            selectedQuantity={product.quantity}
                            calculatedPrice={
                                product.quantity * Number(product.price?.amount)
                            }
                            onProductRemove={(productId: string) => {
                                dispatch({
                                    type: CartActionKind.remove,
                                    payload: { productId },
                                });
                            }}
                            onQuantityUpdate={(
                                productId: string,
                                quantity: number
                            ) => {
                                dispatch({
                                    type: CartActionKind.quantityUpdate,
                                    payload: { productId, quantity },
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
                        <p>{cart.totalPrice} BGN</p>
                    </div>

                    <Button
                        className="w-full"
                        onClick={() => alert("continue")}
                    >
                        Продължи
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cart;
