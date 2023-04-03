const RECOMMENDED_PRODUCTS = [
    "8122847396121",
    "8122845135129",
    "8122817970457",
];

export function getRecommendedProductIds() {
    if (RECOMMENDED_PRODUCTS.length !== 3) {
        throw new Error("Recommended products are not of length 3!");
    }

    return RECOMMENDED_PRODUCTS;
}
