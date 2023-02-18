import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Client from "shopify-buy";
import { ShopifyClient } from "src/services/shopify-client";

import { Product, ShopifyImage, type Collection } from "src/types/shared";
import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    collectionProducts: Product[];
}

const ProductsOverview: NextPage<Props> = ({ collectionProducts }) => {
    return (
        <>
            <Head>
                <title> Ceramicss - Products Overview </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center flex-col bg-white">
                <h1> Product overview page </h1>

                <p>{JSON.stringify(collectionProducts, null, 4)}</p>
            </section>

            <ul className="flex items-center justify-center flex-col"></ul>
        </>
    );
};

export async function getStaticPaths() {
    try {
        const client = ShopifyClient.getInstance();

        const collections = await client.getAllCollections({
            shouldReturnOnlyIds: true,
        });

        const paths = collections.map((collection) => ({
            params: { collectionId: collection.id },
        }));

        return {
            paths,
            fallback: false, // can also be true or 'blocking'
        };
    } catch (err) {
        console.error(err);
    }
}

export async function getStaticProps(
    context: GetStaticPropsContext<{ collectionId: string }>
) {
    const { params } = context;

    if (!params) {
        return {};
    }

    try {
        const { collectionId } = params;
        const collectionProducts =
            await ShopifyClient.getInstance().fetchCollectionProducts(
                collectionId
            );

        return { props: { collectionProducts } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
