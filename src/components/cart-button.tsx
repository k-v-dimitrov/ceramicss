import { Fragment } from "react";
import Link from "next/link";

import { useToggle } from "@/hooks";
import { Cart as CartIcon, Close as CloseIcon } from "@/components/vectors";
import { useCart } from "@/storefront/hooks";

import CartLine from "./cart-line";
import { Dialog, Transition } from "@headlessui/react";

function CartButton() {
    const { data, isLoading } = useCart();
    const [isCartOpen, toggleCart] = useToggle();

    const hasLines = data?.lines.length! > 0;

    return (
        <>
            <button
                disabled={isLoading}
                className="bg-primary-500 rounded-full h-[48px] w-[48px]  flex justify-center items-center relative"
                onClick={toggleCart}
            >
                {data?.lines.length! > 0 && (
                    <span className="bg-[#fe002f] absolute -top-1.5 -right-1.5 rounded-full h-6 w-6 text-white text-center leading-[26px] text-sm">
                        {data?.lines.length}
                    </span>
                )}

                <CartIcon className="h-6 fill-primary" />
            </button>

            <Transition show={isCartOpen}>
                <Dialog onClose={toggleCart}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 z-20" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="fixed bg-white top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col z-20 p-4 md:w-[480px] md:left-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl text-primary-500 font-bold">
                                    Количка
                                </h1>

                                <button onClick={toggleCart}>
                                    <CloseIcon className="fill-primary-500 h-4" />
                                </button>
                            </div>

                            {!hasLines && !isLoading && (
                                <div className="h-full flex flex-col justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 581 390"
                                        className="w-[40%] mb-6 mx-auto fill-primary-500"
                                    >
                                        <path d="M542 1H39C18 1 1 18 1 39v48c0 20 17 37 37 38l31 220c3 25 24 43 49 43h345c25 0 46-18 49-43l19-136c1-7-4-13-11-14v-1c-8-1-16 5-17 13l-19 134c-1 11-10 19-21 19H118c-11 0-20-8-21-19L67 125h475c21 0 38-17 38-38V39c0-21-17-38-38-38zm10 86c0 5-5 10-10 10H39c-5 0-10-5-10-10V39c0-6 5-10 10-10h503c5 0 10 4 10 10v48z" />
                                        <path d="M280 188v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0zm-110 0v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0zm214 0v101a14 14 0 0 0 28 0V188a14 14 0 0 0-28 0z" />
                                    </svg>

                                    <div className="flex flex-col items-center text-center gap-2">
                                        <h1 className="text-2xl font-bold">
                                            Вашата количка е празна
                                        </h1>
                                        <p className="text-[#6A6A6A]">
                                            Изглежда не сте добавили нищо във
                                            вашата количка
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
                                <div className="flex flex-col h-full justify-between gap-4 overflow-hidden">
                                    <div className="flex-grow overflow-auto">
                                        <div className="flex flex-col gap-6">
                                            {data?.lines.map((line) => (
                                                <Fragment key={line.id}>
                                                    <CartLine line={line} />

                                                    <hr />
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-200 rounded-md flex justify-between items-center py-4 px-4">
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
                                </div>
                            )}
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}

export default CartButton;
