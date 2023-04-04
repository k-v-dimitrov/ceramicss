import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Storefront } from "@/services";
import { GetCollectionProductsQuery } from "@/types/graphql";

import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    collection: GetCollectionProductsQuery["collection"];
}

const ProductsOverview: NextPage<Props> = ({ collection }) => {
    return (
        <>
            <Head>
                <title> Ceramicss - Products Overview </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-24 flex items-center justify-center flex-col bg-white">
                <h1> Product overview page </h1>
                <br />
                <ul>
                    {collection?.products.edges.map(({ node: product }) => {
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
            </section>

            <ul className="flex items-center justify-center flex-col"></ul>
        </>
    );
};

export async function getStaticPaths() {
    try {
        const { collections } = await Storefront.collections.listIds();

        const paths = collections.nodes.map(({ id }) => ({
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
        const { collection } = await Storefront.collections.products(
            rebuildShopifyCollectionId(collectionId)
        );

        return { props: { collection } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
