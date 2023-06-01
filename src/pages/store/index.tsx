import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { type InferGetStaticPropsType } from "next";

import { client } from "@/libs/genql";

function Page({ collections }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                Магазин
            </h1>

            {collections.map((collection, collectionIndex) => (
                <Fragment key={collection.id}>
                    <Link href={`/store/${collection.id}`}>
                        <Image
                            src={collection.image?.url}
                            alt={collection.image?.altText || ""}
                            height={600}
                            width={600}
                            className="brightness-95 rounded-lg w-full mb-4"
                        />

                        <p className="text-2xl text-primary-500 text-center">
                            {collection.title}
                        </p>
                    </Link>

                    {collectionIndex < collections.length - 1 && (
                        <hr className="mt-4 mb-7 border-gray-200" />
                    )}
                </Fragment>
            ))}
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
