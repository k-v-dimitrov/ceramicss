import Head from "next/head";
import { type NextPage } from "next";

const AboutUs: NextPage = () => {
    return (
        <>
            <Head>
                <title>About Us - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About Us</h1>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default AboutUs;
