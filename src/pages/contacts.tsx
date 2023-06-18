import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Mail, Phone } from "@/components/vectors";

const contacts = [
    {
        label: "+359 88 501 1100",
        icon: (
            <div className="bg-primary-500 rounded-full h-8 w-8 flex justify-center items-center">
                <Phone className="h-4" />
            </div>
        ),
        href: "tel:+359885011100",
    },
    {
        label: "info@ceramicss.eu",
        icon: (
            <div className="bg-primary-500 rounded-full h-8 w-8 flex justify-center items-center">
                <Mail className="h-3 fill-white" />
            </div>
        ),
        href: "mailto:info@ceramicss.eu",
    },
    {
        label: "CeramicsS",
        icon: (
            <div className="bg-primary-500 rounded-full h-8 w-8 flex justify-center items-center">
                <Facebook className="h-5 fill-white" />
            </div>
        ),
        href: "https://www.facebook.com",
    },
    {
        label: "ceramicss.eu",
        icon: (
            <div className="bg-primary-500 rounded-full h-8 w-8 flex justify-center items-center">
                <Instagram className="h-4 fill-white" />
            </div>
        ),
        href: "https://www.instagram.com",
    },
];

function Page() {
    return (
        <>
            <h1 className="text-2xl text-primary-500 font-bold mb-4">
                Контакти
            </h1>

            <div className="flex flex-col gap-4 mx-auto justify-center mb-4">
                {contacts.map((contact) => (
                    <Link
                        key={contact.label}
                        href={contact.href}
                        className="flex gap-4 items-center text-xl w-fit"
                    >
                        <span>{contact.icon}</span>
                        <span className="text-[#6A6A6A]">{contact.label}</span>
                    </Link>
                ))}
            </div>

            <Image
                src="/images/simple-logo.svg"
                height={375}
                width={316}
                alt=""
                className="w-1/2"
            />
        </>
    );
}

export default Page;
