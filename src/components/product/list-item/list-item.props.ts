export interface ListItemProps {
    selectedQuantity: number;
    onQuantityUpdate?: (productId: string, quantity: number) => void;
    calculatedPrice: number;
}
