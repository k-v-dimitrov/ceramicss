import { Dispatch, SetStateAction } from "react";

interface QuantityPickerProps {
    currQuantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

export default QuantityPickerProps;
