import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import {
    Storefront,
    TransformedCollectionProducts,
    TransformedCollections,
} from "@/services";

import { Header, Footer, CollectionsMenu, Product } from "@/components";

import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    currentCollection: TransformedCollections[number];
    collectionProducts: TransformedCollectionProducts;
    allCollections: TransformedCollections;
}

const ProductsOverview: NextPage<Props> = ({
    collectionProducts,
    currentCollection,
    allCollections,
}) => {
    return (
        <div className="container m-auto">
            <Head>
                <title> Ceramicss - Products Overview </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className="flex">
                <CollectionsMenu
                    collectionIdentifiers={allCollections}
                    currentCollection={currentCollection}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 m-auto">
                    <Product.GridItem product={collectionProducts?.[0]} />
                    <Product.GridItem product={collectionProducts?.[1]} />
                    <Product.GridItem product={collectionProducts?.[2]} />
                    <Product.GridItem product={collectionProducts?.[0]} />
                    <Product.GridItem product={collectionProducts?.[0]} />
                    <Product.GridItem product={collectionProducts?.[0]} />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    try {
        const ids = await Storefront.collections.listIds();

        const paths = ids.map(({ id }) => ({
            params: { collectionId: sanitizeShopifyId(id) },
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
        const collectionProducts = await Storefront.collections.products(
            rebuildShopifyCollectionId(collectionId)
        );

        const allCollections = await Storefront.collections.listIds();

        const currentCollection = allCollections.find(
            ({ id }) => id === rebuildShopifyCollectionId(collectionId)
        );

        return {
            props: {
                collectionProducts,
                allCollections: allCollections.map(({ id, title }) => ({
                    title,
                    id: sanitizeShopifyId(id),
                })),

                currentCollection,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
