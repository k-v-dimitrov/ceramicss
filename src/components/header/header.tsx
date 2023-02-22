import { type FC } from "react";
import Link from "next/link";

import Logo from "@/public/icons/logo.svg";
import { SITE_NAV } from "@/constants/navigation.constants";

import type HeaderProps from "./header.props";

const Header: FC<HeaderProps> = () => {
    const isCartEmpty = false;

    return (
        <div className="bg-white  w-full">
            <div className="lg:container flex justify-between items-center px-4 py-6 mx-auto">
                <Link href="/" className="w-24">
                    <Logo />
                </Link>

                <div className="gap-x-10 text-primary-500 font-comfortaa hidden lg:flex">
                    {SITE_NAV.map(({ label, href }) => (
                        <Link key={label} href={href}>
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex">
                    <div className="flex items-center bg-gray-300 rounded-full px-2 py-2 mr-3 self-center sokere">
                        <div className="mr-3">
                            <div className="icon-search cursor-pointer text-primary-500 text-lg"></div>
                        </div>

                        <input type="text" className="bg-unset mr-2" />
                    </div>

                    <div>
                        <div className="inline-block relative">
                            {!isCartEmpty && (
                                <div className="absolute h-3 w-3 bg-warning-500 right-0 rounded-full" />
                            )}

                            <div className="hover:cursor-pointer flex justify-center items-center h-10 w-10 bg-primary-500 rounded-full">
                                <div className="icon-cart text-white text-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">hamburger</div>
            </div>
        </div>
    );
};

export default Header;
