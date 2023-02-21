import { type NextPage } from "next";
import Head from "next/head";
import { Contacts } from "src/components/contacts";
import { Footer } from "src/components/footer";

const Dev: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Contacts />
            <Footer />
        </>
    );
};

export default Dev;
