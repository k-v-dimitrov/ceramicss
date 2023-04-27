import Link from "next/link";

import Logo from "@/public/icons/logo.svg";

const HomeLogoButton = () => (
    <Link href="/" className="w-24">
        <Logo />
    </Link>
);

export default HomeLogoButton;
