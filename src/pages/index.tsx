import { GetStaticPropsContext, type NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

import Modal from "react-modal";

import { Storefront, type ProductType } from "@/services";

import { Header, Footer, Product, Button } from "@/components";
import { COVER_IMAGE, rebuildShopifyProductId } from "@/utils";

import { getRecommendedProductIds } from "@/constants/recommended-products.constants";
import { useEffect, useState } from "react";

// ~~~~ DELETE
const password = "YE48ce2c9MNDLMD";
const PassProtect = ({ onUnlock }: { onUnlock: () => void }) => {
    const [input, setInput] = useState("");

    const handlePasswordSubmit = () => {
        if (input === password) {
            onUnlock();
        }
    };

    return (
        <Modal
            isOpen
            className="bg-black bg-opacity-50 h-full outline-none flex flex-col justify-center items-center gap-3"
            ariaHideApp={false}
        >
            <h1 className="text-white">CeramicsS е заключен!</h1>

            <input
                type="password"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <Button onClick={handlePasswordSubmit}>Влез</Button>
        </Modal>
    );
};

const lockedOn = "ceramicss";

// ~~~~ /DELETE

interface HomeProps {
    recommendedProducts: ProductType[];
}

const Home: NextPage<HomeProps> = ({ recommendedProducts }) => {
    // ~~~~ DELETE
    const [isLocked, setLocked] = useState(true);

    useEffect(() => {
        setLocked(document.location.href.includes(lockedOn));
    }, []);

    if (isLocked) {
        return <PassProtect onUnlock={() => setLocked(false)} />;
    }
    // ~~~~ /DELETE

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
                            url: COVER_IMAGE,
                            width: 1200,
                            height: 630,
                            alt: "CeramicsS landing",
                            type: "image/webp",
                        },
                    ],
                    siteName: "CeramicsS",
                }}
            />

            <Header />

            <section className="flex flex-col relative bg-center h-[80vh]">
                <Image
                    src={COVER_IMAGE}
                    height={1980}
                    width={940}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                />
                <Link
                    className="py-4 px-6 bg-[#FFF] text-primary-500 font-semibold rounded-3xl hover:cursor-pointer absolute top-3/4 left-1/2 -translate-x-2/4"
                    href="/collections"
                >
                    Виж повече
                </Link>
            </section>

            <section className="">
                <div className="p-6 lg:p-12 flex flex-col items-center">
                    <div className="flex flex-col">
                        <h1 className="text-primary-500 text-3xl self-start">
                            Препоръчани
                        </h1>

                        <div className="flex flex-col gap-5 lg:flex-row">
                            {recommendedProducts.map((product) => (
                                <Product.GridItem
                                    key={product?.id}
                                    product={product}
                                />
                            ))}
                        </div>
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
                                    src="/imgs/front-team-1.webp"
                                    height={391}
                                    width={638}
                                    alt="Team photo first"
                                    className="object-scale-down rounded-lg"
                                />

                                <Image
                                    src="/imgs/front-team-2.webp"
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

            <Footer />
        </div>
    );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const recommendedProductIds = getRecommendedProductIds();

        const recommendedProducts = await Promise.all(
            recommendedProductIds.map((id) => {
                return Storefront.products.get(rebuildShopifyProductId(id));
            })
        );

        return {
            props: {
                recommendedProducts,
            },
        };
    } catch (err) {
        console.error(err);
    }
}
