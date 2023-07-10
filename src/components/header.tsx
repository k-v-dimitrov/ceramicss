import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useToggle } from "@/hooks";
import { CartButton, SearchInput } from "@/components";
import {
    Logo as LogoIcon,
    Burger as BurgerIcon,
    Close as CloseIcon,
} from "@/components/vectors";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";

const links = [
    { label: "Начало", pathname: "/", pattern: /^\/$/ },
    {
        label: "Магазин",
        pathname: "/shop",
        pattern: /^\/(shop|product|cart)(\/[0-9]+)?$/,
    },
    { label: "За Нас", pathname: "/about", pattern: /\/about/ },
    { label: "Контакти", pathname: "/contacts", pattern: /\/contacts/ },
];

function Header() {
    const pathname = usePathname();
    const [isSidebarOpen, toggleSidebar] = useToggle();
    const { asPath } = useRouter();

    useEffect(() => {
        if (isSidebarOpen) {
            toggleSidebar();
        }
    }, [asPath]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <header className="bg-white shadow flex items-center gap-4 z-20 h-[var(--header-height)] w-full p-4 sticky top-0 lg:justify-between">
                <button onClick={toggleSidebar} className="lg:hidden">
                    <BurgerIcon className="w-9 h-8" />
                </button>

                <Link href="/">
                    <LogoIcon className="h-9" />
                </Link>

                <div className="hidden lg:flex gap-16">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.pathname}
                            className="text-primary-500 rounded-xl font-bold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="ml-auto lg:ml-0 flex items-center gap-4">
                    <div className="hidden lg:block">
                        <SearchInput variant="sm" />
                    </div>

                    <div>
                        <CartButton />
                    </div>
                </div>
            </header>

            <Transition show={isSidebarOpen}>
                <Dialog onClose={toggleSidebar}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div
                            className="fixed inset-0 bg-black/30"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-[-100%]"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-[-100%]"
                    >
                        <Dialog.Panel className="bg-white fixed inset-0 z-50 p-3 lg:hidden">
                            <div className="flex justify-between items-center mb-6 mt-4 mx-3">
                                <LogoIcon className="h-9" />

                                <button onClick={toggleSidebar}>
                                    <CloseIcon className="h-6 fill-primary-500" />
                                </button>
                            </div>

                            <SearchInput />

                            <div className="flex flex-col mt-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.pathname}
                                        className={clsx(
                                            "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                            {
                                                "bg-[#EAEAEA]":
                                                    link.pattern.test(
                                                        pathname!
                                                    ),
                                            }
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}

export default Header;
