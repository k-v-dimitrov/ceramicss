import { Dispatch, SetStateAction } from "react";

//(initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>]

interface QuantityPickerProps {
    currQuantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

export default QuantityPickerProps;
