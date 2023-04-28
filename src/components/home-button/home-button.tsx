import Image from "next/image";
import Link from "next/link";

const HomeLogoButton = () => (
    <Link href="/" className="w-24">
        <Image src="/imgs/logo.svg" height={84} width={255} alt="" />
    </Link>
);

export default HomeLogoButton;
