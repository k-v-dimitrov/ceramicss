import { useState, useCallback, type FC, useEffect } from "react";
import Link from "next/link";
import Modal from "react-modal";
import { useRouter } from "next/router";

import Logo from "@/public/icons/logo.svg";
import { SITE_NAV } from "@/constants/navigation.constants";

import type HeaderProps from "./header.props";
import classNames from "classnames";

const Header: FC<HeaderProps> = () => {
    const router = useRouter();
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);
    const isCartEmpty = false;

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

    const DynamicCartIcon = useCallback(() => {
        return (
            <>
                {!isCartEmpty && (
                    <div className="absolute h-3 w-3 bg-warning-500 right-0 rounded-full" />
                )}
            </>
        );
    }, [isCartEmpty]);

    const Desktop = () => (
        <>
            <div className="hidden lg:flex">
                <Link href="/" className="w-24">
                    <Logo />
                </Link>
            </div>

            <div className="gap-x-16 text-primary-500 font-comfortaa hidden lg:flex">
                {SITE_NAV.map(({ label, href }) => (
                    <Link key={label} href={href}>
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex">
                <div className="hidden lg:flex items-center bg-gray-300 rounded-full px-2 py-2 mr-3 self-center">
                    <div className="mr-3">
                        <div className="icon-search cursor-pointer text-primary-500 text-lg" />
                    </div>

                    <input type="text" className="bg-unset mr-2" />
                </div>

                <Link href="/cart">
                    <div className="inline-block relative">
                        <DynamicCartIcon />

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
            className="bg-black bg-opacity-50 h-full outline-none flex"
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

                <div className="pb-4 px-3">
                    <div className="flex items-center bg-gray-300 rounded-full px-2 py-2 self-center">
                        <input
                            type="text"
                            className="bg-unset ml-2 placeholder-gray-600 w-full"
                            placeholder="Какво търсите?"
                        />

                        <div className="icon-search cursor-pointer text-primary-500 text-lg mr-2" />
                    </div>
                </div>
            </div>
        </Modal>
    );

    const MobileToggler = () => (
        <div className="flex gap-8 lg:hidden">
            {activeMobileMenu ? (
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    <i className="icon-remove text-[24px]"></i>
                </button>
            ) : (
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                    <i className="icon-menu"></i>
                </button>
            )}

            <Link href="/" className="w-24">
                <Logo />
            </Link>
        </div>
    );

    return (
        <div className="bg-white w-full">
            <div className="flex justify-between items-center p-6 lg:mx-auto lg:container">
                <MobileToggler />
                <Desktop />
                <Mobile />
            </div>
        </div>
    );
};

export default Header;
