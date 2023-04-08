import { useState, type FC } from "react";

import QuantityPickerProps from "./quantity-picker.props";

const QuantityPicker: FC<QuantityPickerProps> = ({
    currQuantity,
    setQuantity,
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
        <div className="flex justify-center align-middle bg-primary-500 text-white text-[24px] text-center rounded-lg">
            <button
                onClick={handleDecrement}
                disabled={currQuantity <= 1}
                className="min-w-[24px] py-2 px-4"
            >
                -
            </button>

            <div className="w-[48px] py-2 px-4">{currQuantity}</div>

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
