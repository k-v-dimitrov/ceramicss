import classNames from "classnames";
import { type FC } from "react";

import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
    const hasCustomClassNames = !!className;

    return (
        <button
            onClick={onClick}
            className={(hasCustomClassNames
                ? className
                : "bg-primary-500 font-bold text-white"
            ).concat(" px-6 py-2 rounded-lg")}
        >
            {children}
        </button>
    );
};

export default Button;
