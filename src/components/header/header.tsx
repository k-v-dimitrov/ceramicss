import { useState, useCallback, type FC, useEffect, useContext } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";

import { SITE_NAV } from "@/constants/navigation.constants";

import { CartContext } from "@/contexts";

import type HeaderProps from "./header.props";
import { HomeButton, Search } from "@/components";

const Header: FC<HeaderProps> = () => {
    const { cart } = useContext(CartContext);
    const router = useRouter();
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    const [mobileSearchView, setMobileSearchView] = useState(false);

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
        setMobileSearchView(false);
    };

    const handleSearchViewRequest = () => {
        setMobileSearchView(true);
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
                <Search.Desktop />

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
            className="bg-black bg-opacity-50 h-full outline-none flex justify-end"
            overlayClassName="fixed top-[88px] h-[calc(100%-88px)] w-full border-t-2 border-t-gray-300"
            ariaHideApp={false}
        >
            <div className="flex flex-col justify-between w-3/4 h-full bg-white">
                <div className="flex flex-col text-xl text-primary-500">
                    {SITE_NAV.map(({ label, href }) => {
                        const isCurrentLink = router.asPath === href;

                        return (
                            <Link
                                key={label}
                                href={href}
                                className={classNames({
                                    "bg-gray-300": isCurrentLink,
                                    "px-4": true,
                                    "py-3": true,
                                    "mt-4": true,
                                    "mx-4": true,
                                    "rounded-xl": true,
                                })}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>

                <Search.Mobile.Toggler
                    requestMobileSearch={handleSearchViewRequest}
                />
            </div>
        </Modal>
    );

    const MobileToggler = () => (
        <div className="flex gap-8 lg:hidden">
            {activeMobileMenu ? (
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    <i className="icon-remove text-[32px]"></i>
                </button>
            ) : (
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    <i className="icon-menu text-[32px]"></i>
                </button>
            )}
        </div>
    );

    return (
        <div className="bg-white w-full">
            <div className="flex justify-between items-center p-6 lg:mx-auto lg:container">
                {mobileSearchView ? (
                    <>
                        <Search.Mobile.Search />
                        <MobileToggler />
                    </>
                ) : (
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

                                <MobileToggler />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
