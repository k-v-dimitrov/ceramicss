import { useReducer } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { Header, Footer, Product } from "@/components";
import { TransformedProduct } from "@/services";
import { getMockedCartProducts } from "@/constants/mocked-cart-products";

enum CartActionKind {
    quantityUpdate = "q_update",
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

            const newTotal = calculateTotalCartPrice(cartState.products);

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
    const productsInCart = getCurrentItemsInCart();

    const [cart, dispatch] = useReducer(cartReducer, {
        products: productsInCart,
        totalPrice: calculateTotalCartPrice(productsInCart),
    });

    return (
        <div className="container m-auto">
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <h1 className="text-4xl text-primary-500 font-bold">Количка</h1>
            <section className="grid grid-cols-2">
                <div>
                    {cart.products.map((product) => (
                        <Product.ListItem
                            key={product.id}
                            product={product as TransformedProduct}
                            selectedQuantity={product.quantity}
                            calculatedPrice={
                                product.quantity *
                                Number(product.variants?.amount)
                            }
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
            </section>

            <Footer />
        </div>
    );
};

export default Cart;
