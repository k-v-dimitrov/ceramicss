import { type FC } from "react";

import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-primary-500 font-bold text-white px-6 py-2 rounded-lg`}
        >
            {children}
        </button>
    );
};

export default Button;
