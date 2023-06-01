import Link from "next/link";

import { Facebook, Instagram } from "@/components/vectors";

function Footer() {
    return (
        <footer className="bg-primary-500 flex flex-col justify-center items-center py-10 gap-4">
            <div className="flex gap-4">
                <a
                    href="https://facebook.com"
                    className="bg-white h-10 w-10 rounded-full flex justify-center items-center"
                >
                    <Facebook className="h-7 fill-primary-500" />
                </a>

                <a
                    href="https://instagram.com"
                    className="bg-white h-10 w-10 rounded-full flex justify-center items-center"
                >
                    <Instagram className="h-6 fill-primary-500" />
                </a>
            </div>

            <div className="flex flex-col justify-center text-white flex-wrap gap-2 font-bold">
                <div className="flex justify-center gap-4">
                    <Link href="/about">За Нас</Link>
                    <Link href="/shop">Магазин</Link>
                </div>

                <div className="flex justify-center gap-4">
                    <Link href="/contacts">Контакти</Link>
                    <Link href="/terms-of-use">Общи Условия</Link>
                </div>
            </div>

            <p className="text-white opacity-60">© 2023 Ceramicss</p>
        </footer>
    );
}

export default Footer;
