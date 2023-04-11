import classNames from "classnames";
import { type FC } from "react";

import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                `bg-primary-500 font-bold text-white px-6 py-2 rounded-lg`,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
