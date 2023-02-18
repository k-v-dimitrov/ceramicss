import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
                <title>Ceramicss - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center bg-white">
                <h1> Collections page </h1>
            </section>

            <ul className="flex items-center justify-center flex-col">
                {collectionList.map(({ title, id }) => {
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
        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const collectionList =
            await ShopifyClient.getInstance().getAllCollections({
                shouldReturnOnlyIds: false,
            });

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
