import { type NextPage } from "next";
import Head from "next/head";
import { Header, Footer, Product } from "@/components";
import { TransformedProduct } from "@/services";
import { getMockedCartProducts } from "@/constants/mocked-cart-products";

// TODO: return not mocked items
const getCurrentItemsInCart = () => {
    return getMockedCartProducts().map((mockedProduct) => ({
        ...mockedProduct,
        quantity: 2,
    }));
};

const Cart: NextPage = () => {
    const productsInCart = getCurrentItemsInCart();

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
                    {productsInCart.map((product) => (
                        <Product.ListItem
                            key={product.id}
                            product={product as TransformedProduct}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cart;
