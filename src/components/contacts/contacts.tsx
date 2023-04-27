import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { BubbleIcon } from "@/components";

import ContactsProps from "./contacts.props";

type ContactRow = {
    label: string;
    icon: React.ReactNode;
    href: string;
};

const CONTACTS_LIST: ContactRow[] = [
    {
        label: "+359 88 501 1100",
        icon: <BubbleIcon type="tel" />,
        href: "tel:+359885011100",
    },
    {
        label: "info@ceramicss.eu",
        icon: <BubbleIcon type="mail" />,
        href: "mailto:info@ceramicss.eu",
    },
    {
        label: "CeramicsS",
        icon: <BubbleIcon type="facebook" />,
        href: "https://www.facebook.com",
    },
    {
        label: "ceramicss.eu",
        icon: <BubbleIcon type="instagram" />,
        href: "https://www.instagram.com",
    },
];

const Contacts: FC<ContactsProps> = () => {
    return (
        <section className="flex flex-col justify-center items-center lg:flex-row lg:justify-around">
            <ul className="flex flex-col m-20 justify-center">
                {CONTACTS_LIST.map((contact) => {
                    return (
                        <li key={contact.label}>
                            <Link
                                href={contact.href}
                                className="flex my-3 items-center"
                            >
                                <div className="mr-4">{contact.icon}</div>
                                <p className="text-2xl text-gray-700">
                                    {contact.label}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="my-20">
                <Image src="/imgs/simple-logo.svg" height={375} width={316} alt="" />
            </div>
        </section>
    );
};

export default Contacts;
