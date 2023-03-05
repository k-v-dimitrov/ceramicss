import Head from "next/head";
import { type NextPage } from "next";

const Contacts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contacts - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Contacts</h1>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default Contacts;
