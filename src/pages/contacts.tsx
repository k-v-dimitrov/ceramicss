import { type NextPage } from "next";
import Head from "next/head";

import { Contacts, Header, Footer } from "@/components";

const ContactsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Contacts />
            <Footer />
        </>
    );
};

export default ContactsPage;
