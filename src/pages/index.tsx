import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import LandingCoverPhoto from "@/public/imgs/landing-cover.png";
import TeamPhoto1 from "@/public/imgs/front-team-1.png";
import TeamPhoto2 from "@/public/imgs/front-team-2.png";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ceramicss - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section
                className="border flex min-h-screen flex-col relative"
                style={{ backgroundImage: `url(${LandingCoverPhoto.src})` }}
            >
                <Link
                    className="py-4 px-6 bg-[#FFF] text-primary-500 font-semibold rounded-3xl hover:cursor-pointer absolute top-3/4 left-1/2 -translate-x-2/4"
                    href="/collections"
                >
                    Виж повече
                </Link>
            </section>

            <section className="p-5 mt-10 lg:w-10/12 lg:mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col">
                        <h1 className="text-primary-500 text-4xl mb-5 self-start">
                            Екип
                        </h1>
                        <div className="flex flex-col gap-10 lg:flex-row">
                            <Image
                                src={TeamPhoto1}
                                alt="Team photo first"
                                width={638}
                                height={391}
                                className=""
                            />
                            <Image
                                src={TeamPhoto2}
                                alt="Team photo second"
                                width={638}
                                height={391}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-40"></section>
        </>
    );
};

export default Home;
