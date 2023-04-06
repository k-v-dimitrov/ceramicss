import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Storefront, TransformedCollectionProducts } from "@/services";

import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";

interface Props {
    collectionProducts: TransformedCollectionProducts;
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
                <br />
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
            </section>

            <ul className="flex items-center justify-center flex-col"></ul>
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
        const products = await Storefront.collections.products(
            rebuildShopifyCollectionId(collectionId)
        );

        return { props: { products } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
