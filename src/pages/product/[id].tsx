import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";

import { Storefront, TransformedProduct } from "@/services";

import { Footer, Header } from "@/components";

import { addItem, rebuildShopifyProductId } from "@/utils";
import DetailedProduct from "@/components/product/detailed";

interface Props {
    product: TransformedProduct;
}

const ProductOverview: NextPage<Props> = ({ product }) => {
    return (
        <div className="container m-auto">
            <Head>
                <title> Ceramicss - Single Product Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <DetailedProduct
                product={product}
                onAddToCart={(qty) => {
                    addItem({
                        quantity: qty,
                        merchandiseId: product.variantId!,
                    })
                        .then(() => alert("success"))
                        .catch(() => alert("fail"));
                }}
            />

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

export default ProductOverview;
