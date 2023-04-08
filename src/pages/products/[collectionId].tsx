import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import {
    Storefront,
    TransformedCollectionProducts,
    TransformedCollections,
} from "@/services";

import { Header, Footer, CollectionsMenu } from "@/components";

import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    collectionProducts: TransformedCollectionProducts;
    allCollections: TransformedCollections;
}

const ProductsOverview: NextPage<Props> = ({
    collectionProducts,
    allCollections,
}) => {
    return (
        <>
            <Head>
                <title> Ceramicss - Products Overview </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <CollectionsMenu collectionIdentifiers={allCollections} />

            {/* <section className="py-24 flex items-center justify-center flex-col bg-white">
                <ul>
                    {collectionProducts?.map(({ product }) => {
                        return (
                            <Link
                                key={product.id}
                                href={`/product/${sanitizeShopifyId(
                                    product.id
                                )}`}
                                className="p-2 hover:underline hover:cursor-pointer"
                            >
                                {product.title}
                            </Link>
                        );
                    })}
                </ul>
            </section> */}

            <Footer />
        </>
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

        return {
            props: {
                collectionProducts,
                allCollections: allCollections.map(({ id, title }) => ({
                    title,
                    id: sanitizeShopifyId(id),
                })),
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
