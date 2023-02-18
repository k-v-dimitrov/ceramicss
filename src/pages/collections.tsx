import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Client from "shopify-buy";
import { ShopifyClient } from "src/services/shopify-client";

import { type Collection } from "src/types/shared";
import { sanitizeShopifyId } from "src/utils";

interface Props {
    collectionList: Collection[];
}

const Collections: NextPage<Props> = ({ collectionList }) => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center bg-white">
                <h1> Collections page </h1>
            </section>

            <ul className="flex items-center justify-center flex-col">
                {collectionList.map(({ title, id }) => {
                    return (
                        <a
                            className="p-2 hover:underline hover:cursor-pointer"
                            key={id}
                            href={`/products/${sanitizeShopifyId(id)}`}
                        >
                            {title}
                        </a>
                    );
                })}
            </ul>
        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const client = ShopifyClient.getInstance();
        const collections = await client.collection.fetchAll();

        const collectionList: Collection[] = collections.map(
            (collection) =>
                ({
                    title: collection.title,
                    id: collection.id,
                } as Collection)
        );

        return {
            props: {
                collectionList,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default Collections;
