import Head from "next/head";
import { type NextPage } from "next";

import { type HomeProps } from "@/types/pages";

const Cart: NextPage<HomeProps> = () => {
    return (
        <>
            <Head>
                <title>Cart - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="noindex"></meta>
            </Head>

            <h1>Cart</h1>
        </>
    );
};

export default Cart;
