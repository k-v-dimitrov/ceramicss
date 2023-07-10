import { ImageRotator } from "@/components";
import { useToggle } from "@/hooks";
import useAddCartLine from "@/storefront/hooks/useAddCartLine";
import { client } from "@/storefront";
import clsx from "clsx";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";

function Page({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [quantity, setQuantity] = useState(1);
    const [isDescriptionExpanded, toggleDescriptionExpansion] = useToggle();

    const { mutate, isLoading } = useAddCartLine();

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
            <NextSeo
                title={`${
                    // @ts-expect-error
                    product?.productType[0].toUpperCase() +
                    // @ts-expect-error
                    product?.productType.slice(1).toLowerCase()
                } "${product?.title}" | CeramicsS`}
                description={product?.description}
            />

            <div className="flex flex-col md:flex-row md:gap-8">
                <div className="md:w-[324px] md:min-w-[324px]">
                    <ImageRotator images={product?.images.nodes} />
                </div>
                <div className="md:flex-grow">
                    <div className="flex flex-col gap-2 mt-4">
                        <legend className="text-[#6A6A6A] capitalize">
                            {product?.productType}
                        </legend>
                        <h1 className="text-2xl text-primary-500">
                            {product?.title}
                        </h1>
                        <h2 className="text-2xl text-[#6A6A6A] my-2">
                            {Number.parseFloat(
                                product?.variants.nodes[0].priceV2.amount
                            ).toFixed(2)}{" "}
                            {product?.variants.nodes[0].priceV2.currencyCode}
                        </h2>
                        <p
                            className={clsx(
                                "text-[#6A6A6A]",
                                !isDescriptionExpanded && "line-clamp-3"
                            )}
                        >
                            {product?.description}
                        </p>
                        <button
                            className="text-primary-500 underline self-start"
                            onClick={toggleDescriptionExpansion}
                        >
                            {isDescriptionExpanded
                                ? "Прочети по-малко"
                                : "Прочети повече"}
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
                                className={clsx(
                                    "flex flex-col gap-2 relative md:max-w-[384px]",
                                    {
                                        "after:absolute after:w-full after:h-full after:opacity-70 after:bg-white after:animate-pulse":
                                            isLoading,
                                    }
                                )}
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
                                            merchandiseId:
                                                product.variants.nodes[0].id,
                                        })
                                    }
                                >
                                    Добави в Количката
                                </button>
                            </fieldset>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const { products } = await client.query({
        products: {
            __args: {
                first: 250,
            },
            nodes: {
                id: true,
            },
        },
    });

    return {
        paths: products.nodes.map((product) => ({
            params: {
                product: product.id.split("/").at(-1),
            },
        })),
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
            productType: true,
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
