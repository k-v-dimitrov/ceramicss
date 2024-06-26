import { useContext, useEffect, useState } from "react";
import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";

import { Storefront, ProductType } from "@/services";

import { Footer, Header, Loading } from "@/components";

import { rebuildShopifyProductId } from "@/utils";
import { Product } from "@/components";
import { CartContext } from "@/contexts";
import { NextSeo } from "next-seo";

interface Props {
    product: ProductType;
}

const ProductOverview: NextPage<Props> = ({ product }) => {
    const { addItem, isLoading, isProductInCart } = useContext(CartContext);

    const [isAlreadyInCart, setIsAddedToCart] = useState<boolean | null>(null);

    const addToCartHandler = async (variantId: string, quantity: number) => {
        await addItem!({ merchandiseId: variantId, quantity });
    };

    useEffect(() => {
        if (!isLoading) {
            setIsAddedToCart(isProductInCart!(product.id));
        }
    }, [isLoading, isProductInCart, product.id]);

    return (
        <div className="container m-auto">
            <NextSeo
                title={`CeramicsS - ${product.title}`}
                description={product.description}
                openGraph={{
                    url: `https://ceramicss.eu/product/${product.id}`,
                    title: `CeramicsS - ${product.title}`,
                    description: product.description,
                    images: [
                        {
                            url: product.images![0].url,
                            width: 1200,
                            height: 630,
                            alt: product.images![0].altText!,
                            type: "image/webp",
                        },
                    ],
                    siteName: "CeramicsS",
                }}
            />

            <Header />

            {isLoading ? (
                <Loading />
            ) : (
                <Product.Detailed
                    product={product}
                    onAddToCart={addToCartHandler}
                    initiallyAddedToCart={isAlreadyInCart}
                />
            )}

            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    try {
        const allProductIds = (await Storefront.products.all()).map(
            (p) => p.id
        );

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

export default ProductOverview;
