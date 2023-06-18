import Link from "next/link";
import Image from "next/image";

function Page() {
    return (
        <>
            <section className="flex flex-col relative bg-center h-[80vh]">
                <Image
                    src="/images/landing/cover-11.webp"
                    height={1980}
                    width={940}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                    priority
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
                            {/* {recommendedProducts.map((product) => (
                                <Product.GridItem
                                    key={product?.id}
                                    product={product}
                                />
                            ))} */}
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
                                    src="/images/front-team-1.webp"
                                    height={391}
                                    width={638}
                                    alt="Team photo first"
                                    className="object-scale-down rounded-lg"
                                />

                                <Image
                                    src="/images/front-team-2.webp"
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
        </>
    );
}

export default Page;
