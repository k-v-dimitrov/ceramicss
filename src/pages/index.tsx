import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import LandingCoverPhoto from "@/public/imgs/landing-cover.png";
import TeamPhoto1 from "@/public/imgs/front-team-1.png";
import TeamPhoto2 from "@/public/imgs/front-team-2.png";
import { Footer } from "src/components/footer";
import { getRecommendedProductIds } from "@/constants/recommended-products.constants";
import { ShopifyClient } from "src/services/shopify-client";
import { Product } from "src/types/shared";
import { Header } from "@/components";

interface HomeProps {
    recommendedProducts: Product[];
}

const Home: NextPage<HomeProps> = ({ recommendedProducts }) => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section
                className="flex flex-col relative bg-center"
                style={{
                    backgroundImage: `url(${LandingCoverPhoto.src})`,
                    height: "70vh",
                }}
            >
                <Link
                    className="py-4 px-6 bg-[#FFF] text-primary-500 font-semibold rounded-3xl hover:cursor-pointer absolute top-3/4 left-1/2 -translate-x-2/4"
                    href="/collections"
                >
                    Виж повече
                </Link>
            </section>

            <section>
                <div className="p-12 flex flex-col items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-primary-500 text-3xl self-start">
                            Екип
                        </h1>

                        <div className="flex flex-col gap-10 lg:flex-row">
                            <Image
                                src={TeamPhoto1}
                                alt="Team photo first"
                                className="object-fit"
                            />

                            <Image
                                src={TeamPhoto2}
                                alt="Team photo first"
                                className="object-fit"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#EAEAEA]">
                <div className="p-12 flex flex-col items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-primary-500 text-3xl self-start">
                            Препоръчани
                        </h1>

                        <div className="flex flex-col gap-10 lg:flex-row">
                            {recommendedProducts.map((product) => {
                                return (
                                    <Image
                                        key={product.id}
                                        src={product.images[0]}
                                        alt={product.description}
                                        className="object-fit"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const recommendedProductIds = getRecommendedProductIds();

        const recommendedProducts = await Promise.all(
            recommendedProductIds.map((id) =>
                ShopifyClient.getInstance().getProductById(id)
            )
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
