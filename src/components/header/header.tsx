import Link from "next/link";

import {
    Logo as LogoIcon,
    Burger as BurgerIcon,
    Magnifier as MagnifierIcon,
} from "@/components/vectors";
import CartButton from "@/components/cart-button/cart-button";

const links = [
    { label: "Начало", pathname: "/", pattern: /^\/$/ },
    {
        label: "Магазин",
        pathname: "/shop",
        pattern: /^\/(product|products|cart)(\/[0-9]+)?$/,
    },
    { label: "За Нас", pathname: "/about", pattern: /\/about/ },
    { label: "Контакти", pathname: "/contacts", pattern: /\/contacts/ },
];

function Header() {
    return (
        <header className="bg-white shadow flex p-4 items-center gap-4 z-20 fixed w-full lg:justify-between h-[var(--header-height)]">
            <button className="lg:hidden">
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
                <div className="bg-[#EAEAEA] rounded-full overflow-hidden hidden lg:flex h-12 items-center px-5 gap-4 text-sm">
                    <input
                        type="text"
                        className="bg-transparent w-full focus:outline-none placeholder:text-[#A0A0A0]"
                        placeholder="Какво търсите?"
                    />
                    <MagnifierIcon className="h-6" />
                </div>

                <CartButton />
            </div>
        </header>
    );
}

export default Header;
