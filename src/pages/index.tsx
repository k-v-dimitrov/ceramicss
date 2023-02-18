import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";

import Client from "shopify-buy";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="py-24 flex items-center min-h-screen justify-center flex-col bg-white">
                <h1>Cerramicss frontpage</h1>
                <a
                    className="p-2 hover:underline hover:cursor-pointer"
                    href="/collections"
                >
                    Go to collection
                </a>
            </section>
        </>
    );
};

export default Home;
