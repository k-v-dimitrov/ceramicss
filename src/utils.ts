import { CartLineInput, CartLineUpdateInput } from "./types/graphql";

/**
 * Shopify's ids look very ugly, e.g. gid:/shopify/Collection/438093119769
 * This function will match only the numbers from the id and return it.
 * Note: Couldn't think of a more generic name... (getNumericsFromString)?
 */
export const sanitizeShopifyId = (id: string) => {
    var numberPattern = /\d+/g;
    const matchedId = id.match(numberPattern)?.[0];

    if (matchedId) {
        return matchedId;
    } else {
        throw new Error(`Could not match numeric id for ${id}`);
    }
};

/**
 *  Next 2 functions are used to rebuild shopifyId from sanitizedShopifyId because of getStaticPaths limitation.
 *  See: https://stackoverflow.com/questions/73025224/pass-params-from-getstaticpaths-to-getstaticprops-which-is-not-binded-to-route
 */
export const rebuildShopifyCollectionId = (id: string) => {
    return `gid://shopify/Collection/${id}`;
};

export const rebuildShopifyProductId = (id: string) => {
    return `gid://shopify/Product/${id}`;
};

// ---------------- Storefront Client Actions ---------------- //

export async function removeItem(lineId: string) {
    return fetch("/api/cart/lines/remove", {
        method: "POST",
        body: JSON.stringify({ lineId }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function addItem(line: CartLineInput) {
    return fetch("/api/cart/lines/add", {
        method: "POST",
        body: JSON.stringify({ line }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function updateItem(line: CartLineUpdateInput) {
    return fetch("/api/cart/lines/update", {
        method: "POST",
        body: JSON.stringify({ line }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
