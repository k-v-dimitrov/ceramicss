import { type NextPage } from "next";
import { NextSeo } from "next-seo";

import { Contacts, Header, Footer } from "@/components";

const ContactsPage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="CeramicsS - контакти"
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
            <Contacts />
            <Footer />
        </>
    );
};

export default ContactsPage;
