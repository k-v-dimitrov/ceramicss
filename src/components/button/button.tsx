import classNames from "classnames";
import { type ButtonHTMLAttributes, type FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={classNames(
                "bg-primary-500 font-bold text-white px-6 py-2 rounded-lg",
                props.className
            )}
        >
            {props.children}
        </button>
    );
};

export default Button;
