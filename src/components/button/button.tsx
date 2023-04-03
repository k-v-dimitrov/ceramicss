import { type FC } from "react";

import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = ({ size, children }) => {
    return (
        <button
            className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}
        >
            {children}
        </button>
    );
};

export default Button;
