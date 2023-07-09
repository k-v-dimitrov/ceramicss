import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

import { useToggle } from "@/hooks";
import { CartButton, Portal, SearchInput } from "@/components";
import { Logo as LogoIcon, Burger as BurgerIcon } from "@/components/vectors";

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

    // HACK: prevent scrolling when sidebar is open
    // https://www.jayfreestone.com/writing/locking-body-scroll-ios/
    const scrollTop = useRef(0);

    const handleToggle = () => {
        toggleSidebar();

        // this "if" actually fires when the sidebar is open
        if (!isSidebarOpen) {
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

    const handleRouteChange = () => {
        if (isSidebarOpen) {
            setTimeout(handleToggle, 300);
        }
    };

    return (
        <>
            <header className="bg-white shadow flex items-center gap-4 h-[var(--header-height)] w-full p-4 z-20 sticky top-0 lg:justify-between">
                <button onClick={handleToggle} className="lg:hidden">
                    <BurgerIcon className="w-9 h-8" />
                </button>

                <Link href="/" onClick={handleRouteChange}>
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
                        <SearchInput
                            variant="sm"
                            onSubmit={handleRouteChange}
                        />
                    </div>

                    <div onClick={handleRouteChange}>
                        <CartButton />
                    </div>
                </div>
            </header>

            {isSidebarOpen && (
                <Portal>
                    <div className="bg-white fixed top-[80px] w-full h-[calc(100%-80px)] z-10 p-3 lg:hidden">
                        <SearchInput onSubmit={handleRouteChange} />

                        <div className="flex flex-col mt-4">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.pathname}
                                    onClick={handleRouteChange}
                                    className={clsx(
                                        "text-lg text-primary-500 py-4 rounded-xl pl-4 font-bold",
                                        {
                                            "bg-[#EAEAEA]": link.pattern.test(
                                                pathname!
                                            ),
                                        }
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
}

export default Header;
