import classNames from "classnames";
import { useEffect, useState, type FC } from "react";

import QuantityPickerProps from "./quantity-picker.props";

const QuantityPicker: FC<QuantityPickerProps> = ({
    currQuantity,
    setQuantity,
    variant = "filled",
}) => {
    // TODO: must check inventory if there will be enough available
    const handleIncrement = () => {
        setQuantity((prevQty) => prevQty + 1);
    };

    const handleDecrement = () => {
        if (currQuantity > 1) {
            setQuantity((prevQty) => prevQty - 1);
        }
    };

    return (
        <div
            className={classNames({
                flex: true,
                "justify-center": true,
                "items-center": true,
                "bg-primary-500": variant === "filled",
                "text-white": variant === "filled",
                "text-[24px]": variant === "filled",
                "text-[16px]": variant === "outlined",
                "text-black": variant === "outlined",
                "text-center": true,
                "rounded-lg": true,
            })}
        >
            <button
                onClick={handleDecrement}
                disabled={currQuantity <= 1}
                className="min-w-[24px] py-2 px-4"
            >
                -
            </button>

            <div
                className={classNames({
                    "min-w-[36px]": true,
                    "w-fit": true,
                    "py-1": true,
                    "px-2": true,
                    "border-2 border-primary-500 rounded-md":
                        variant === "outlined",
                    "leading-tight": variant === "outlined",
                    "h-fit": variant === "outlined",
                })}
            >
                {currQuantity}
            </div>

            <button
                onClick={handleIncrement}
                className="min-w-[24px] py-2 px-4"
            >
                +
            </button>
        </div>
    );
};

export default QuantityPicker;
