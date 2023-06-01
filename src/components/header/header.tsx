"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { useToggle } from "@/hooks";
import { Burger, Logo, Cart, Magnifier } from "@/components/vectors";

function Header() {
    const pathname = usePathname();
    const [isSidebarOpen, toggleSidebar] = useToggle();

    // HACK: prevent scrolling when sidebar is open
    // https://www.jayfreestone.com/writing/locking-body-scroll-ios/
    const scrollTop = useRef(0);
    useEffect(() => {
        if (isSidebarOpen) {
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

        window.scrollTo(0, scrollTop.current);
    }, [isSidebarOpen]);

    return (
        <>
            <header className="bg-white shadow flex p-4 items-center gap-4 z-20 fixed w-full">
                <button onClick={toggleSidebar}>
                    <Burger className="w-9 h-8" />
                </button>

                <Link href="/">
                    <Logo className="h-9" />
                </Link>

                <Link
                    href="/cart"
                    className="bg-primary-500 rounded-full h-[48px] w-[48px] ml-auto flex justify-center items-center relative"
                >
                    <span className="bg-[#fe002f] absolute -top-1.5 -right-1.5 rounded-full h-6 w-6 text-white text-center leading-[26px] text-sm">
                        1
                    </span>
                    <Cart className="h-6 fill-primary" />
                </Link>
            </header>

            {isSidebarOpen && (
                <div className="bg-white fixed top-[80px] w-full h-[calc(100%-80px)] p-3 z-10">
                    <div className="bg-[#EAEAEA] rounded-full overflow-hidden flex h-14 items-center px-5 gap-4">
                        <input
                            type="text"
                            className="bg-unset w-full focus:outline-none placeholder:text-[#A0A0A0]"
                            placeholder="Какво търсите?"
                        />
                        <Magnifier className="h-6" />
                    </div>

                    <div className="flex flex-col mt-4">
                        <Link
                            href="/"
                            className={clsx(
                                "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                {
                                    "bg-[#EAEAEA]": pathname === "/",
                                }
                            )}
                        >
                            Начало
                        </Link>
                        <Link
                            href="/about"
                            className={clsx(
                                "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                {
                                    "bg-[#EAEAEA]": pathname === "/about",
                                }
                            )}
                        >
                            За Нас
                        </Link>
                        <Link
                            href="/shop"
                            className={clsx(
                                "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                {
                                    "bg-[#EAEAEA]": pathname === "/shop",
                                }
                            )}
                        >
                            Магазин
                        </Link>
                        <Link
                            href="/contacts"
                            className={clsx(
                                "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                {
                                    "bg-[#EAEAEA]": pathname === "/contacts",
                                }
                            )}
                        >
                            Контакти
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
