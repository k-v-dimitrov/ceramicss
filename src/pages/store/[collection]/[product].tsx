import { ImageRotator } from "@/components";
import useAddLineToCart from "@/hooks/useAddLineToCart";
import { client } from "@/libs/genql";
import clsx from "clsx";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useState } from "react";

function Page({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [quantity, setQuantity] = useState(1);
    const { mutate, isLoading } = useAddLineToCart();

    function handleIncrement() {
        if (quantity < product?.variants.nodes[0].quantityAvailable!) {
            setQuantity(quantity + 1);
        }
    }

    function handleDecrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <ImageRotator images={product?.images.nodes} />

            <div className="flex flex-col gap-2 mt-4">
                <legend className="text-[#6A6A6A] capitalize">
                    {product?.tags[0]}
                </legend>
                <h1 className="text-2xl text-primary-500">{product?.title}</h1>
                <h2 className="text-2xl text-[#6A6A6A] my-2">
                    {product?.variants.nodes[0].priceV2.amount}{" "}
                    {product?.variants.nodes[0].priceV2.currencyCode}
                </h2>
                <p className="text-[#6A6A6A] line-clamp-3">
                    {product?.description}
                </p>
                <button className="text-primary-500 underline self-start">
                    Прочети повече
                </button>
            </div>

            <div className="mt-4">
                {!product?.availableForSale && (
                    <div className="bg-gray-400 font-bold text-gray-700 w-full text-center h-14 leading-[56px] rounded-lg">
                        Изчерпано Количество
                    </div>
                )}

                {product?.availableForSale && (
                    <fieldset
                        className={clsx("flex flex-col gap-2 relative", {
                            "after:absolute after:w-full after:h-full after:opacity-70 after:bg-white after:animate-pulse":
                                isLoading,
                        })}
                        disabled={isLoading}
                    >
                        <div className="flex justify-between border-primary-500 text-primary-500 rounded-lg h-14 items-center border-2">
                            <button
                                className="h-full w-14 flex justify-center items-center text-xl"
                                onClick={handleDecrement}
                            >
                                -
                            </button>

                            <div>{quantity}</div>

                            <button
                                className="h-full w-14 flex justify-center items-center text-xl"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>

                        <button
                            className="bg-primary-500 text-white w-full text-center h-14 rounded-lg"
                            onClick={() =>
                                mutate({
                                    quantity,
                                    merchandiseId: product.variants.nodes[0].id,
                                })
                            }
                        >
                            Добави в Количката
                        </button>
                    </fieldset>
                )}
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
                products: {
                    __args: {
                        first: 250,
                    },
                    nodes: {
                        id: true,
                    },
                },
            },
        },
    });

    return {
        paths: collections.nodes
            .map((collection) =>
                collection.products.nodes.map((product) => ({
                    params: {
                        collection: collection.id.split("/").at(-1),
                        product: product.id.split("/").at(-1),
                    },
                }))
            )
            .flat(),
        fallback: false,
    };
}

export async function getStaticProps({
    params,
}: GetStaticPropsContext<{ product: string }>) {
    const { product } = await client.query({
        product: {
            __args: {
                id: `gid://shopify/Product/${params?.product}`,
            },
            availableForSale: true,
            images: {
                __args: {
                    first: 4,
                },
                nodes: {
                    id: true,
                    url: true,
                    altText: true,
                },
            },
            tags: true,
            title: true,
            description: true,
            variants: {
                __args: {
                    first: 1,
                },
                nodes: {
                    id: true,
                    quantityAvailable: true,
                    priceV2: {
                        amount: true,
                        currencyCode: true,
                    },
                },
            },
        },
    });

    return {
        props: { product },
    };
}

export default Page;
