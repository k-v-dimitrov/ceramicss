import { type FC } from "react";

import ContactsProps from "./contacts.props";

import SimpleLogo from "@/public/icons/simple-logo.svg";
import MailIcon from "@/public/icons/mail-icon.svg";
import TelIcon from "@/public/icons/tel-icon.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import Link from "next/link";

type ContactRow = {
    label: string;
    icon: React.FC;
    href: string;
};

const CONTACTS_LIST: ContactRow[] = [
    {
        label: "+359 88 501 1100",
        icon: TelIcon,
        href: "tel:+359885011100",
    },
    {
        label: "info@ceramicss.eu",
        icon: MailIcon,
        href: "mailto:info@ceramicss.eu",
    },
    {
        label: "CeramicsS",
        icon: FacebookIcon,
        href: "https://www.facebook.com",
    },
    {
        label: "ceramicss.eu",
        icon: InstagramIcon,
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
                                <div className="mr-4">
                                    <contact.icon />
                                </div>
                                <p className="text-2xl">{contact.label}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="my-20">
                <SimpleLogo />
            </div>
        </section>
    );
};

export default Contacts;
