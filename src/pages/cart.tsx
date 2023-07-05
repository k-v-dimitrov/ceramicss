import Link from "next/link";
import { useCart } from "@/storefront/hooks";
import { CartLine } from "@/components";
import { NextSeo } from "next-seo";

function Page() {
    const { data, isLoading } = useCart();

    const hasLines = data?.lines.length! > 0;

    return (
        <>
            <NextSeo title="Количка | CeramicsS" noindex />

            {isLoading && <span className="my-10">Зареждане...</span>}

            {!hasLines && !isLoading && (
                <div className="pb-10 pt-9">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 581 390"
                        className="h-56 w-2/3 mx-auto mb-4 fill-primary-500"
                    >
                        <path d="M542 1H39C18 1 1 18 1 39v48c0 20 17 37 37 38l31 220c3 25 24 43 49 43h345c25 0 46-18 49-43l19-136c1-7-4-13-11-14v-1c-8-1-16 5-17 13l-19 134c-1 11-10 19-21 19H118c-11 0-20-8-21-19L67 125h475c21 0 38-17 38-38V39c0-21-17-38-38-38zm10 86c0 5-5 10-10 10H39c-5 0-10-5-10-10V39c0-6 5-10 10-10h503c5 0 10 4 10 10v48z" />
                        <path d="M280 188v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0zm-110 0v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0zm214 0v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0z" />
                    </svg>

                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-2xl font-bold">
                            Вашата количка е празна
                        </h1>
                        <p className="text-[#6A6A6A]">
                            Изглежда не сте добавили нищо във вашата количка
                        </p>

                        <Link
                            href="/shop"
                            className="bg-primary-500 text-white rounded-full py-4 px-6 mt-2"
                        >
                            Към магазина
                        </Link>
                    </div>
                </div>
            )}

            {hasLines && !isLoading && (
                <>
                    <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                        Количка
                    </h1>

                    <div className="flex flex-col md:flex-row-reverse md:gap-6">
                        <div className="bg-gray-200 rounded-md flex justify-between items-center py-4 px-4 mb-3 md:w-full md:self-start">
                            <div className="font-bold">
                                <p>Общо:</p>
                                <p>{`${Number.parseFloat(
                                    data?.cost.amount
                                ).toFixed(2)} ${data?.cost.currencyCode}`}</p>
                            </div>

                            <Link
                                href={data?.url}
                                className="bg-primary-500 rounded-md text-white px-6 py-4"
                            >
                                Продължи
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            {data?.lines.map((line) => (
                                <CartLine key={line.id} line={line} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Page;
