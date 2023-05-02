import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import { Contacts } from "src/components/contacts";
import { Footer } from "src/components/footer";

const Dev: NextPage = () => {
    return (
        <>
            <NextSeo
                title="CeramicsS"
                description="
                    CeramicsS е вашият магазин за красиви ръчно изработени керамични изделия. Нашите продукти се изработват с любов и грижа, гарантирайки уникалността и високото качество на всеки един артикул. CeramicsS се фокусира върху устойчивото и етично производство. Разгледайте нашата колекция днес и си донесете допълнително изкуство и елегантност. Не просто магазин за красиви керамични изделия!
                "
                noindex
            />

            <Contacts />
            <Footer />
        </>
    );
};

export default Dev;
