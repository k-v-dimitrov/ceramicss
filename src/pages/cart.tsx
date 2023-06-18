import { Fragment } from "react";

import Link from "next/link";
import { useCartQuery } from "@/hooks";
import { CartLine } from "@/components/cart-line";

function Page() {
    const { data, isLoading } = useCartQuery();

    if (isLoading) {
        return (
            <>
                <div className="h-8 w-28 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                <div className="h-[88px] w-full bg-gray-200 rounded-lg animate-pulse mb-4"></div>

                <div className="flex flex-col gap-4">
                    {[1, 2].map((line) => (
                        <Fragment key={line}>
                            <div className="flex gap-2">
                                <div className="h-[88px] min-w-[88px] bg-gray-200 rounded-lg animate-pulse"></div>
                                <div className="h-[88px] w-full bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>

                            <div className="h-[1px] w-full bg-gray-200 my-3"></div>
                        </Fragment>
                    ))}
                </div>
            </>
        );
    }

    if (!data?.lines.length) {
        return (
            <div className="pb-10 pt-9">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-56 w-2/3 mx-auto mb-4 fill-primary-500"
                >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                </svg>

                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-2xl font-bold">
                        Вашата количка е празна
                    </h1>
                    <p className="text-[#6A6A6A]">
                        Изглежда не сте добавили нищо във вашата количка
                    </p>

                    <Link
                        href="/store"
                        className="bg-primary-500 text-white rounded-full py-4 px-6 mt-2"
                    >
                        Към магазина
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                Количка
            </h1>

            <div className="bg-gray-200 rounded-md flex justify-between items-center py-4 px-4 mb-3">
                <div className="font-bold">
                    <p>Общо:</p>
                    <p>{`${Number.parseFloat(data.cost.amount).toFixed(2)} ${
                        data.cost.currencyCode
                    }`}</p>
                </div>

                <Link
                    href={data?.url}
                    className="bg-primary-500 rounded-md text-white px-6 py-4"
                >
                    Продължи
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                {data?.lines.map((line) => (
                    <CartLine key={line.id} line={line} />
                ))}
            </div>
        </>
    );
}

export default Page;
