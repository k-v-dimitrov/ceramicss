import { StaticImageData } from "next/image";
import { type ReactNode } from "react";

interface AlternatingSectionProps {
    flip?: boolean;
    SectionImage: React.ReactElement;
    title: string;
    paragraph: string;
}

export default AlternatingSectionProps;
