import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { client } from "@/storefront";
import { InferGetStaticPropsType } from "next";

function Page({
    recommendedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <NextSeo title="Начало | CeramicsS" />

            <section className="flex flex-col relative bg-center h-[80vh]">
                <Image
                    src="/images/landing/cover-11.webp"
                    height={1980}
                    width={940}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                    priority
                />
                <Link
                    className="py-4 px-6 bg-[#FFF] text-primary-500 font-semibold rounded-3xl hover:cursor-pointer absolute top-3/4 left-1/2 -translate-x-2/4"
                    href="/collections"
                >
                    Виж повече
                </Link>
            </section>

            <section className="my-6">
                <h1 className="text-primary-500 text-3xl self-start mb-4">
                    Препоръчани
                </h1>

                <div className="h-[384px] overflow-hidden">
                    <div className="pb-10 flex overflow-x-auto gap-4 snap-x snap-mandatory">
                        {recommendedProducts?.nodes.map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id
                                    .split("/")
                                    .at(-1)}`}
                                className="flex flex-col min-w-[90%] snap-start"
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex justify-center bg-[#EAEAEA]">
                <Link href="/about">
                    <div className="p-12 flex flex-col items-center">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-primary-500 text-3xl self-start">
                                Екип
                            </h1>

                            <div className="flex flex-col gap-10 lg:flex-row">
                                <Image
                                    priority
                                    src="/images/front-team-1.webp"
                                    height={391}
                                    width={638}
                                    alt="Team photo first"
                                    className="object-scale-down rounded-lg"
                                />

                                <Image
                                    src="/images/front-team-2.webp"
                                    height={391}
                                    width={638}
                                    alt="Team photo first"
                                    className="object-scale-down rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const { collection } = await client.query({
        collection: {
            __args: {
                handle: "препоръчани",
            },
            products: {
                __args: {
                    first: 3,
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
        props: { recommendedProducts: collection?.products },
    };
}

export default Page;
