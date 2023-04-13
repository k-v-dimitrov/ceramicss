import { CartType } from "@/services";

type LineItem = NonNullable<CartType>["lines"][number];

export interface ListItemProps {
    selectedQuantity: number;
    onQuantityUpdate?: (productId: string, quantity: number) => void;
    onProductRemove?: (productId: string) => void;
    line: LineItem;
}
