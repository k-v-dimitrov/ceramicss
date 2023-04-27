import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { Header, AlternatingSection, Footer } from "@/components";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <AlternatingSection
                SectionImage={<Image src="/imgs/blank.png" height={732} width={732} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                flip
                SectionImage={<Image src="/imgs/blank.png" height={732} width={732} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                SectionImage={<Image src="/imgs/blank.png" height={732} width={732} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <Footer />
        </>
    );
};

export default About;
