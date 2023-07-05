import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";

import { client } from "@/storefront";
import { NextSeo } from "next-seo";

function Page({ collection }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <NextSeo title={`${collection?.title} | CeramicsS`} />

            <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                {collection?.title}
            </h1>

            <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                {collection?.products.nodes.map((product) => (
                    <Fragment key={product.id}>
                        <Link
                            href={`/product/${product.id.split("/").at(-1)}`}
                            className="flex flex-col"
                        >
                            <Image
                                src={product.images.nodes[0].url}
                                alt={product.images.nodes[0].altText || ""}
                                height={600}
                                width={600}
                                className="brightness-95 rounded-lg w-full mb-3"
                            />

                            <legend className="capitalize text-[#626262] mb-1">
                                {product.productType}
                            </legend>

                            <div className="flex justify-between">
                                <p className="text-primary-500 text-xl font-bold">
                                    {product.title}
                                </p>
                                <p className="text-primary-500 text-xl">
                                    {`${Number.parseFloat(
                                        product.variants.nodes[0].priceV2
                                            ?.amount
                                    ).toFixed(2)} ${
                                        product.variants.nodes[0].priceV2
                                            ?.currencyCode
                                    }`}
                                </p>
                            </div>
                        </Link>

                        <hr className="mt-4 mb-6 border-gray-200 sm:hidden" />
                    </Fragment>
                ))}
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const { collections } = await client.query({
        collections: {
            __args: {
                first: 100,
            },
            nodes: {
                id: true,
            },
        },
    });

    return {
        paths: collections.nodes.map((collection) => ({
            params: {
                collection: collection.id.split("/").at(-1),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({
    params,
}: GetStaticPropsContext<{ collection: string }>) {
    const { collection } = await client.query({
        collection: {
            __args: {
                id: `gid://shopify/Collection/${params?.collection}`,
            },
            id: true,
            title: true,
            products: {
                __args: {
                    first: 250,
                },
                nodes: {
                    id: true,
                    title: true,
                    images: {
                        __args: {
                            first: 1,
                        },
                        nodes: {
                            id: true,
                            url: true,
                            altText: true,
                        },
                    },
                    productType: true,
                    variants: {
                        __args: {
                            first: 1,
                        },
                        nodes: {
                            priceV2: {
                                amount: true,
                                currencyCode: true,
                            },
                        },
                    },
                },
            },
        },
    });

    return {
        props: {
            collection,
        },
    };
}

export default Page;
