import Head from "next/head";
import { type NextPage } from "next";

const Shop: NextPage = () => {
    return (
        <>
            <Head>
                <title>Shop - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Shop</h1>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default Shop;
