import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Storefront, type TransformedCollections } from "@/services";

import { Footer, Header } from "@/components";
import { sanitizeShopifyId } from "@/utils";

interface Props {
    collections: TransformedCollections;
}

const Collections: NextPage<Props> = ({ collections }) => {
    return (
        <>
            <Head>
                <title>Ceramicss - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className="md:px-40 px-10 mt-10">
                <h1 className="text-4xl text-primary-500 font-bold">Магазин</h1>

                <ul className="flex items-center justify-center flex-col md:grid md:grid-cols-3">
                    {collections.map(({ title, id, image }) => {
                        return (
                            <Link
                                className="p-4 hover:underline hover:cursor-pointer m-auto"
                                key={id}
                                href={`/products/${sanitizeShopifyId(id)}`}
                            >
                                {image && image.width && image.height && (
                                    <Image
                                        src={image.url}
                                        alt={image.altText || ""}
                                        width={image.width}
                                        height={image.height}
                                    />
                                )}
                                <p className="ml-5 text-xl">{title}</p>
                            </Link>
                        );
                    })}
                </ul>
            </section>

            <Footer />
        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const collections = await Storefront.collections.list();

        return {
            props: {
                collections,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default Collections;
