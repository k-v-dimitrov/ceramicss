import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Storefront, type CollectionType } from "@/services";

import { Footer, Header } from "@/components";
import { sanitizeShopifyId } from "@/utils";

interface Props {
    collections: CollectionType[];
}

const Collections: NextPage<Props> = ({ collections }) => {
    return (
        <div className="container m-auto">
            <Head>
                <title>Ceramicss - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className="p-6 mt-10">
                <h1 className="text-4xl text-primary-500 font-bold">Магазин</h1>

                <ul className="grid grid-cols-2 md:grid-cols-3">
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
                                        width={image.width * 2}
                                        height={image.height * 2}
                                    />
                                )}

                                <p className="text-gray-700 lg:ml-5 lg:text-xl">
                                    {title}
                                </p>
                            </Link>
                        );
                    })}
                </ul>
            </section>

            <Footer />
        </div>
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
