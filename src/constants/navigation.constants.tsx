import { BubbleIcon } from "@/components/bubble-icon";

type SiteNav = {
    label: string;
    href: string;
    subLinks?: SiteNav[];
};

type SocialLink = {
    href: string;
    icon: React.ReactNode;
};

export const SITE_NAV: SiteNav[] = [
    {
        href: "/",
        label: "Начало",
    },
    {
        href: "/collections",
        label: "Магазин",
        subLinks: [
            { href: "/products/438093119769", label: "Чаши" },
            { href: "/products/438094135577", label: "Обеци" },
            { href: "/collections", label: "Други" },
        ],
    },
    {
        href: "/about",
        label: "За нас",
        subLinks: [
            { href: "/info", label: "Информация" },
            { href: "/404", label: "Общи условия" },
        ],
    },
    {
        href: "/contacts",
        label: "Контакти",
        subLinks: [
            { href: "tel:+359885011100", label: "+359 88 501 1100" },
            { href: "mailto:info@ceramicss.eu", label: "info@ceramicss.eu" },
        ],
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { href: "https://www.facebook.com", icon: <BubbleIcon type="facebook" /> },
    { href: "https://www.instagram.com", icon: <BubbleIcon type="instagram" /> },
];
