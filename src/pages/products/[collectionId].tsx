import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Client from "shopify-buy";

import { Product, ShopifyImage, type Collection } from "src/types/shared";
import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    productsFromCollection: Product[];
}

const ProductsOverview: NextPage<Props> = ({ productsFromCollection }) => {
    return (
        <>
            <Head>
                <title> Home </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center flex-col bg-white">
                <h1> Product overview page </h1>

                <p>{JSON.stringify(productsFromCollection, null, 4)}</p>
            </section>

            <ul className="flex items-center justify-center flex-col"></ul>
        </>
    );
};

export async function getStaticPaths() {
    try {
        const client = Client.buildClient({
            domain: process.env.SHOPIFY_DOMAIN_NAME,
            storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });

        const collections = await client.collection.fetchAllWithProducts();

        const productOverViewPaths = collections.map((collection) => ({
            params: {
                collectionId: sanitizeShopifyId(collection.id),
            },
        }));

        return {
            paths: productOverViewPaths,
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

        const client = Client.buildClient({
            domain: process.env.SHOPIFY_DOMAIN_NAME,
            storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });

        const collectionWithProducts =
            await client.collection.fetchWithProducts(
                rebuildShopifyCollectionId(collectionId)
            );

        //@ts-ignore
        const rawProductsFromCollection = collectionWithProducts.products;

        const productsFromCollection: Product[] = rawProductsFromCollection.map(
            (rawProduct: any): Product => ({
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
            })
        );

        return { props: { productsFromCollection } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
