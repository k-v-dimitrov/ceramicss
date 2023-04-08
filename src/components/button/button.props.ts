import { type ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode | string;
}

export default ButtonProps;
