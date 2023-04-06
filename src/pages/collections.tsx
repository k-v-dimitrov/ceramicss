import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Storefront } from "@/services";
import { GetCollectionsQuery } from "@/types/graphql";

import { Footer, Header } from "@/components";
import { sanitizeShopifyId } from "@/utils";
import { TransformedCollections } from "@/services/storefront/storefront.service";

interface Props {
    collections: TransformedCollections;
}

const Collections: NextPage<Props> = ({ collections }) => {
    return (
        <>
            <Head>
                <title>Ceramicss - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className="py-24 flex items-center justify-center bg-white">
                <h1> Collections page </h1>
            </section>

            <ul className="flex items-center justify-center flex-col">
                {collections.map(({ title, id }) => {
                    return (
                        <Link
                            className="p-2 hover:underline hover:cursor-pointer"
                            key={id}
                            href={`/products/${sanitizeShopifyId(id)}`}
                        >
                            {title}
                        </Link>
                    );
                })}
            </ul>

            <Footer />
        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const collections = await Storefront.collections.list();

        return {
            props: {
                collections,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default Collections;
