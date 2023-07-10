import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import useSearchProducts from "@/storefront/hooks/useSearchProducts";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
    const router = useRouter();

    const { data, isLoading } = useSearchProducts(router.query.query as string);

    const hasProducts = data?.nodes.length! > 0;

    return (
        <>
            <NextSeo
                title={`Резултати за "${router.query.query}" | CeramicsS`}
                noindex
            />

            {isLoading && (
                <>
                    <div className="h-8 w-1/2 bg-gray-300 rounded-lg animate-pulse mb-3" />

                    <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="h-full w-full aspect-square bg-gray-300 rounded-lg animate-pulse mb-3" />
                                <div className="h-6 w-1/3 bg-gray-300 rounded-lg animate-pulse mb-1" />

                                <div className="flex justify-between">
                                    <div className="h-7 w-1/2 bg-gray-300 rounded-lg animate-pulse" />
                                    <div className="h-7 w-1/4 bg-gray-300 rounded-lg animate-pulse" />
                                </div>

                                <div className="h-[1px] w-full bg-gray-300 rounded-lg animate-pulse my-6 sm:hidden" />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {!hasProducts && !isLoading && (
                <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                    Няма резултати за &quot;{router.query.query}&quot;
                </h1>
            )}

            {hasProducts && !isLoading && (
                <div className="py-3">
                    <h1 className="mb-4 text-2xl text-primary-500 font-bold">
                        Резултати за &quot;{router.query.query}&quot;
                    </h1>

                    <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {data?.nodes.map((product) => (
                            <Fragment key={product.id}>
                                <Link
                                    href={`/product/${product.id
                                        .split("/")
                                        .at(-1)}`}
                                    className="flex flex-col"
                                >
                                    <Image
                                        src={product.images.nodes[0].url}
                                        alt={
                                            product.images.nodes[0].altText ||
                                            ""
                                        }
                                        height={600}
                                        width={600}
                                        className="brightness-95 rounded-lg w-full mb-3"
                                    />

                                    <legend className="capitalize text-[#626262] md:text-sm mb-1">
                                        {product.productType}
                                    </legend>

                                    <div className="flex justify-between">
                                        <p className="text-primary-500 text-xl md:text-lg font-bold">
                                            {product.title}
                                        </p>
                                        <p className="text-primary-500 text-xl md:text-lg">
                                            {`${Number.parseFloat(
                                                product.variants.nodes[0]
                                                    .priceV2?.amount
                                            ).toFixed(2)} ${
                                                product.variants.nodes[0]
                                                    .priceV2?.currencyCode
                                            }`}
                                        </p>
                                    </div>
                                </Link>

                                <hr className="mt-4 mb-6 border-gray-200 sm:hidden" />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Page;
