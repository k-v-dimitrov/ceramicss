import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import BlankImage from "@/public/imgs/blank.png";
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
                SectionImage={<Image src={BlankImage} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                flip
                SectionImage={<Image src={BlankImage} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <AlternatingSection
                SectionImage={<Image src={BlankImage} alt="test" />}
                title="Test"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum efficitur, pretium ipsum vitae, interdum massa. Duis elit felis,"
            />

            <Footer />
        </>
    );
};

export default About;
