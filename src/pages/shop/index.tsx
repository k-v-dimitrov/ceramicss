import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { type InferGetStaticPropsType } from "next";

import { client } from "@/storefront";
import { NextSeo } from "next-seo";

function Page({ collections }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <NextSeo title="Магазин | CeramicsS" />

            <div className="py-3">
                <h1 className="mb-4 text-2xl text-primary-500 font-bold">
                    Магазин
                </h1>

                <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {collections
                        .filter(
                            (collection) =>
                                !["Препоръчани"].includes(collection.title)
                        )
                        .map((collection, idx) => (
                            <Fragment key={collection.id}>
                                <Link href={`/shop/${collection.id}`}>
                                    <Image
                                        src={collection.image?.url}
                                        alt={collection.image?.altText || ""}
                                        height={600}
                                        width={600}
                                        className="brightness-95 rounded-lg w-full mb-4"
                                    />

                                    <p className="text-2xl sm:text-lg text-primary-500 text-center">
                                        {collection.title}
                                    </p>
                                </Link>

                                {idx < collections.length - 1 && (
                                    <hr className="mt-4 mb-7 border-gray-200 sm:hidden" />
                                )}
                            </Fragment>
                        ))}
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const {
        collections: { nodes },
    } = await client.query({
        collections: {
            __args: {
                first: 100,
            },
            nodes: {
                id: true,
                title: true,
                image: {
                    id: true,
                    url: true,
                    altText: true,
                },
            },
        },
    });

    return {
        props: {
            collections: nodes.map((node) => ({
                ...node,
                id: node.id.split("/").at(-1),
            })),
        },
    };
}

export default Page;
