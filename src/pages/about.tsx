import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { Header, AlternatingSection, Footer } from "@/components";
import { NextSeo } from "next-seo";

const About: NextPage = () => {
    return (
        <>
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

            <AlternatingSection
                SectionImage={
                    <Image
                        src="/imgs/blank.png"
                        height={732 * 2}
                        width={732 * 2}
                        alt="test"
                        className="rounded-lg"
                    />
                }
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                flip
                SectionImage={
                    <Image
                        src="/imgs/blank.png"
                        height={732 * 2}
                        width={732 * 2}
                        alt="test"
                        className="rounded-lg"
                    />
                }
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                SectionImage={
                    <Image
                        src="/imgs/blank.png"
                        height={732 * 2}
                        width={732 * 2}
                        alt="test"
                        className="rounded-lg"
                    />
                }
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <Footer />
        </>
    );
};

export default About;
