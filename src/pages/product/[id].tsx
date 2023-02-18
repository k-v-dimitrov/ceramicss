import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Client from "shopify-buy";
import { ShopifyClient } from "src/services/shopify-client";

import type { Product, ShopifyImage } from "src/types/shared";
import {
    rebuildShopifyCollectionId,
    rebuildShopifyProductId,
    sanitizeShopifyId,
} from "src/utils";

interface Props {
    product: Product;
}

const ProductsOverview: NextPage<Props> = ({ product }) => {
    return (
        <>
            <Head>
                <title> Ceramicss - Single Product Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center flex-col bg-white">
                <h1> Product overview page </h1>

                <p>{JSON.stringify(product, null, 4)}</p>
            </section>

            <ul className="flex items-center justify-center flex-col"></ul>
        </>
    );
};

export async function getStaticPaths() {
    try {
        const allProductIds =
            await ShopifyClient.getInstance().getAllProductIds({
                shouldSanitizeIds: true,
            });

        const allProductPaths = allProductIds.map((productId) => ({
            params: productId,
        }));

        return {
            paths: allProductPaths,
            fallback: false, // can also be true or 'blocking'
        };
    } catch (err) {
        console.error(err);
    }
}

export async function getStaticProps(
    context: GetStaticPropsContext<{ id: string }>
) {
    const { params } = context;
    if (!params) {
        return {};
    }
    try {
        const { id } = params;
        const product = ShopifyClient.getInstance().getProductById(id);

        return { props: { product } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
