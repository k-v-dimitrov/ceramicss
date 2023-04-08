import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Storefront, TransformedProduct } from "@/services";

import {
    Footer,
    Header,
    Button,
    QuantityPicker,
    ImageRotator,
} from "@/components";

import { rebuildShopifyProductId } from "@/utils";
import { useState } from "react";

interface Props {
    product: TransformedProduct;
}

const ProductsOverview: NextPage<Props> = ({ product }) => {
    const [selectedQty, setSelectedQty] = useState(1);
    const [spotlightedImage, setSpotlightedImage] = useState(
        product?.images[0]
    );

    return (
        <div className="container m-auto">
            <Head>
                <title> Ceramicss - Single Product Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className="grid grid-cols-2">
                <div>
                    <ImageRotator
                        spotlightImage={spotlightedImage}
                        images={product?.images}
                        setSpotlightImage={setSpotlightedImage}
                    />
                </div>

                <div className="pt-16">
                    <p className="text-lg mb-2 font-light">{product?.tag}</p>
                    <p className="text-3xl mb-6 text-primary-500">
                        {product?.title}
                    </p>
                    <p className="text-2xl mb-6 text-gray-700">
                        {product?.variants.amount}{" "}
                        {product?.variants.currencyCode}
                    </p>
                    <p className="w-3/4">{product?.description}</p>

                    {/* Quantity, Add to cart button */}
                    <div className="flex mt-10 gap-4">
                        <QuantityPicker
                            currQuantity={selectedQty}
                            setQuantity={setSelectedQty}
                        />

                        <Button
                            onClick={() => {
                                console.log("IMPLEMENT ME");
                            }}
                        >
                            Добави в количка
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    try {
        const allProductIds = await Storefront.products.ids();

        const allProductPaths = allProductIds.map((id) => ({
            params: { id },
        }));

        return {
            paths: allProductPaths,
            fallback: false, // can also be true or 'blocking'
        };
    } catch (err) {
        console.error(err);
    }
}

export async function getStaticProps(
    context: GetStaticPropsContext<{ id: string }>
) {
    const { params } = context;

    if (!params) {
        return {};
    }

    try {
        const { id } = params;
        const product = await Storefront.products.get(
            rebuildShopifyProductId(id)
        );

        return { props: { product } };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
