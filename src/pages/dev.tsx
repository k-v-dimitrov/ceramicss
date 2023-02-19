import { type NextPage } from "next";
import Head from "next/head";

import { Footer } from "src/components/footer";

const Dev: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Footer />
        </>
    );
};

export default Dev;
