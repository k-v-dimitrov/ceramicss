export interface ListItemProps {
    selectedQuantity: number;
    calculatedPrice: number;
    onQuantityUpdate?: (productId: string, quantity: number) => void;
    onProductRemove?: (productId: string) => void;
}
