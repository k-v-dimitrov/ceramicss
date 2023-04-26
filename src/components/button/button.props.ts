import { type ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode | string;
    className?: string;
}

export default ButtonProps;
