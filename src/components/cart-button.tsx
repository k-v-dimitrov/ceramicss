import {  useRef } from "react";
import Link from "next/link";

import { useToggle } from "@/hooks";
import { Cart } from "@/components/vectors";
import { useCart } from "@/storefront/hooks";

import CartLine from "./cart-line";
import Portal from "./portal";

function CartButton() {
    const { data, isLoading } = useCart();
    const [isCartOpen, toggleCart] = useToggle();

    const hasLines = data?.lines.length! > 0;

    // HACK: prevent scrolling when sidebar is open
    // https://www.jayfreestone.com/writing/locking-body-scroll-ios/
    const scrollTop = useRef(0);

    const handleToggle = () => {
        toggleCart();

        // md breakpoint
        if (window.innerWidth >= 768) {
            return;
        }

        // this "if" actually fires when the sidebar is open
        if (!isCartOpen) {
            scrollTop.current = window.scrollY;

            document.body.classList.add("fixed");
            document.body.classList.add("overflow-hidden");
            document.body.classList.add("top-0");
            document.body.classList.add("left-0");
            document.body.classList.add("right-0");
            document.body.classList.add("bottom-0");
            return;
        }

        document.body.classList.remove("fixed");
        document.body.classList.remove("overflow-hidden");
        document.body.classList.remove("top-0");
        document.body.classList.remove("right-0");
        document.body.classList.remove("left-0");
        document.body.classList.remove("bottom-0");

        if (!document.body.classList.length) {
            document.body.removeAttribute("class");
        }

        window.scrollTo(0, scrollTop.current);
    };

    return (
        <>
            <button
                disabled={isLoading}
                className="bg-primary-500 rounded-full h-[48px] w-[48px]  flex justify-center items-center relative"
                onClick={handleToggle}
            >
                {data?.lines.length! > 0 && (
                    <span className="bg-[#fe002f] absolute -top-1.5 -right-1.5 rounded-full h-6 w-6 text-white text-center leading-[26px] text-sm">
                        {data?.lines.length}
                    </span>
                )}

                <Cart className="h-6 fill-primary" />
            </button>

            {isCartOpen && (
                <Portal>
                    <div className="fixed shadow overflow-y-auto top-[var(--header-height)] bg-white p-3 left-0 right-0 bottom-0 md:w-[480px] md:left-auto z-10">
                        {!hasLines && !isLoading && (
                            <>
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
                                        Изглежда не сте добавили нищо във вашата
                                        количка
                                    </p>

                                    <Link
                                        href="/shop"
                                        className="bg-primary-500 text-white rounded-full py-4 px-6 mt-2"
                                    >
                                        Към магазина
                                    </Link>
                                </div>
                            </>
                        )}

                        {hasLines && !isLoading && (
                            <>
                                <h1 className="mb-2 text-2xl text-primary-500 font-bold">
                                    Количка
                                </h1>

                                <div className="flex flex-col">
                                    <div className="bg-gray-200 rounded-md flex justify-between items-center py-4 px-4 mb-3">
                                        <div className="font-bold">
                                            <p>Общо:</p>
                                            <p>{`${Number.parseFloat(
                                                data?.cost.amount
                                            ).toFixed(2)} ${
                                                data?.cost.currencyCode
                                            }`}</p>
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
                                            <CartLine
                                                key={line.id}
                                                line={line}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </Portal>
            )}
        </>
    );
}

export default CartButton;
