export interface DetailedProductProps {
    onAddToCart: (variantId: string, quantity: number) => Promise<void>;
}
