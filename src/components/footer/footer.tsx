import { useCallback, type FC } from "react";
import Image from "next/image";

import FooterProps from "./footer.props";

import { SITE_NAV, SOCIAL_LINKS } from "@/constants/navigation.constants";

import FooterLogo from "@/public/imgs/footer-logo.png";

import Link from "next/link";

const Footer: FC<FooterProps> = () => {
    return (
        <footer>
            <div className="flex flex-col text-center items-center justify-center md:flex-col md:my-5 lg:w-full lg:flex-row lg:items-start lg:text-start lg:p-4">
                <div className="m-4 lg:w-1/12">
                    <Link href="/">
                        <Image
                            src={FooterLogo}
                            width="100"
                            height="37"
                            alt="footer logo"
                        />
                    </Link>
                </div>

                <ul className="flex flex-col sm:flex-row md:my-5 lg:w-10/12 lg:justify-end">
                    {SITE_NAV.map((navComponent) => {
                        return (
                            <li
                                className="m-3 lg:mx-10 flex flex-col"
                                key={navComponent.label}
                            >
                                <Link
                                    href={navComponent.href}
                                    className="text-primary-500 text-lg my-2 lg:text-2xl hover:underline"
                                >
                                    {navComponent.label}
                                </Link>

                                {navComponent.subLinks?.map((subLink) => {
                                    return (
                                        <Link
                                            key={subLink.label}
                                            href={subLink.href}
                                            className="text text-sm my-1 hover:underline"
                                        >
                                            {subLink.label}
                                        </Link>
                                    );
                                })}
                            </li>
                        );
                    })}
                </ul>

                <ul className="flex lg:w-1/12 lg:mt-5">
                    {SOCIAL_LINKS.map((social) => {
                        return (
                            <li key={social.href} className="m-2">
                                <Link
                                    href={social.href}
                                    className="hover:underline"
                                >
                                    <social.icon />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <p className="text-center mt-3">
                © Ceramiccs, {new Date().getFullYear()}. От ръце за сърце!
            </p>
        </footer>
    );
};

export default Footer;
Image;
