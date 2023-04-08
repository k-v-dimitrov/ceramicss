import type { TransformedCollectionIds, TransformedProduct } from "@/services";

export interface ProductProps {
    collectionIdentifier: TransformedCollectionIds;
    product: TransformedProduct;
}
