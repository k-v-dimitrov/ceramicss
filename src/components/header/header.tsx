import { useState, useCallback, type FC, useEffect, useContext } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";

import { SITE_NAV } from "@/constants/navigation.constants";

import { CartContext } from "@/contexts";

import type HeaderProps from "./header.props";
import { HomeButton, SearchInput } from "@/components";

const Header: FC<HeaderProps> = () => {
    const { cart } = useContext(CartContext);
    const router = useRouter();
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    // Disable scroll on opened modal
    useEffect(() => {
        if (activeMobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [activeMobileMenu]);

    const toggleMobileMenu = () => {
        setActiveMobileMenu((prev) => !prev);
    };

    const CartIndicator = useCallback(() => {
        if (!cart?.hasItems) {
            return null;
        }

        return (
            <>
                <div className="absolute h-5 w-5 bg-warning-500 top-[-6px] right-[-6px] rounded-full text-white text-sm font-extrabold text-center">
                    {cart.lines.length}
                </div>
            </>
        );
    }, [cart]);

    const handleSearchSubmit = () => {
        if (router.query.searchQuery && activeMobileMenu) {
            toggleMobileMenu();
        }
    };

    const Desktop = () => (
        <>
            <div className="gap-x-16 text-primary-500 hidden lg:flex">
                {SITE_NAV.map(({ label, href }) => (
                    <Link key={label} href={href}>
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex">
                <SearchInput className="hidden lg:flex mr-4" />

                <Link href="/cart" className="hidden lg:block">
                    <div className="inline-block relative">
                        <CartIndicator />

                        <div className="hover:cursor-pointer flex justify-center items-center h-10 w-10 bg-primary-500 rounded-full">
                            <div className="icon-cart text-white text-xl"></div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );

    const Mobile = () => (
        <Modal
            isOpen={activeMobileMenu}
            className="w-full h-full border-t border-primary-500"
            overlayClassName="fixed top-[88px] h-[calc(100%-88px)] w-full"
            ariaHideApp={false}
        >
            <div className="flex flex-col h-full bg-white px-2 py-4">
                <SearchInput
                    className="h-12 mb-4"
                    onSubmit={handleSearchSubmit}
                />

                <div className="flex flex-col gap-2">
                    {SITE_NAV.map(({ label, href }) => {
                        const isCurrentLink = router.asPath === href;

                        return (
                            <Link
                                key={label}
                                href={href}
                                className={classNames(
                                    "px-4 rounded-xl py-3 text-primary-500 font-bold text-lg",
                                    {
                                        "bg-gray-300": isCurrentLink,
                                    }
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Modal>
    );

    return (
        <div className="bg-white w-full">
            <div className="flex justify-between items-center p-6 lg:mx-auto lg:container">
                <>
                    <HomeButton />
                    <Desktop />
                    <div className="lg:hidden">
                        <Mobile />

                        <div className="flex gap-8">
                            <Link href="/cart" className="lg:hidden">
                                <div className="inline-block relative">
                                    <CartIndicator />

                                    <div className="hover:cursor-pointer flex justify-center items-center h-10 w-10 bg-primary-500 rounded-full">
                                        <div className="icon-cart text-white text-xl"></div>
                                    </div>
                                </div>
                            </Link>

                            <button
                                className="lg:hidden"
                                onClick={toggleMobileMenu}
                            >
                                <i className="icon-menu text-[32px]"></i>
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Header;
