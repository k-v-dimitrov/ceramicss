import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";

import { Storefront, CollectionType, ProductType } from "@/services";

import { Header, Footer, CollectionsMenu, Product } from "@/components";

import { rebuildShopifyCollectionId, sanitizeShopifyId } from "src/utils";
import { NextSeo } from "next-seo";

interface Props {
    currentCollection: CollectionType;
    collectionProducts: ProductType[];
    allCollections: CollectionType[];
}

const ProductsOverview: NextPage<Props> = ({
    collectionProducts,
    currentCollection,
    allCollections,
}) => {
    return (
        <div className="container m-auto">
            <NextSeo
                title="CeramicsS"
                description="
                    CeramicsS е вашият магазин за красиви ръчно изработени керамични изделия. Нашите продукти се изработват с любов и грижа, гарантирайки уникалността и високото качество на всеки един артикул. CeramicsS се фокусира върху устойчивото и етично производство. Разгледайте нашата колекция днес и си донесете допълнително изкуство и елегантност. Не просто магазин за красиви керамични изделия!
                "
                openGraph={{
                    url: "https://ceramicss.eu",
                    title: "CeramicsS - Онлайн магазин за керамични изделия",
                    description:
                        "CeramicsS е вашият магазин за красиви ръчно изработени керамични изделия. Нашите продукти се изработват с любов и грижа, гарантирайки уникалността и високото качество на всеки един артикул. CeramicsS се фокусира върху устойчивото и етично производство. Разгледайте нашата колекция днес и си донесете допълнително изкуство и елегантност. Не просто магазин за красиви керамични изделия!",
                    images: [
                        {
                            url: "/imgs/landing-cover.webp",
                            width: 1600,
                            height: 1200,
                            alt: "CeramicsS landing",
                            type: "image/webp",
                        },
                    ],
                    siteName: "CeramicsS",
                }}
            />

            <Header />

            <section className="lg:flex">
                <CollectionsMenu
                    allCollections={allCollections}
                    currentCollection={currentCollection}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 m-auto">
                    {collectionProducts.map((collectionProduct) => (
                        <Product.GridItem
                            key={collectionProduct.id}
                            product={collectionProduct}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    try {
        const ids = (await Storefront.collections.list()).map((c) => c.id);

        const paths = ids.map((id) => ({
            params: { collectionId: id },
        }));

        return {
            paths,
            fallback: false, // can also be true or 'blocking'
        };
    } catch (err) {
        console.error(err);
    }
}

export async function getStaticProps(
    context: GetStaticPropsContext<{ collectionId: string }>
) {
    const { params } = context;

    if (!params) {
        return {};
    }

    try {
        const { collectionId } = params;
        const collectionProducts = await Storefront.collections.products(
            rebuildShopifyCollectionId(collectionId)
        );

        const allCollections = await Storefront.collections.list();

        const currentCollection = allCollections.find(
            ({ id }) => id === collectionId
        );

        return {
            props: {
                collectionProducts,
                allCollections: allCollections.map(({ id, title }) => ({
                    title,
                    id: sanitizeShopifyId(id),
                })),

                currentCollection,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

export default ProductsOverview;
