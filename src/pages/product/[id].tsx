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
                <title> Home </title>
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
        const client = ShopifyClient.getInstance();

        const collections = await client.collection.fetchAllWithProducts();

        const allProductPaths = collections
            .map((collection) => {
                return collection.products.map((rawProduct: any) => ({
                    id: sanitizeShopifyId(rawProduct.id),
                }));
            })
            .flat()
            .map((idObject) => ({
                params: idObject,
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
        const client = ShopifyClient.getInstance();

        const rawProduct: any = await client.product.fetch(
            rebuildShopifyProductId(id)
        );

        const product: Product = {
            title: rawProduct.title,
            createdAt: rawProduct.createdAt,
            description: rawProduct.description,
            // descriptionHtml: rawProduct.descriptionHtml,
            id: rawProduct.id,
            images: rawProduct.images.map((image: any): ShopifyImage => {
                return {
                    id: image.id,
                    src: image.src,
                    height: image.height,
                    width: image.width,
                    altText: image.altText,
                };
            }),
            updatedAt: rawProduct.updatedAt,
        };

        return { props: { product } };
    } catch (err) {
        console.error(err);
    }

    return { props: { id: "test" } };
}

export default ProductsOverview;
