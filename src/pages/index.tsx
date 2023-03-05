import Head from "next/head";
import { type NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Home</h1>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default Home;
