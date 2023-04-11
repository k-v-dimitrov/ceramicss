import { Dispatch, SetStateAction } from "react";

interface QuantityPickerProps {
    currQuantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
    variant?: "filled" | "outlined";
}

export default QuantityPickerProps;
