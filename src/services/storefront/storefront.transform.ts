import {
    CoreCollectionFragment,
    CoreProductFragment,
    GetCartQuery,
    GetCheckoutUrlQuery,
} from "@/types/graphql";

import { sanitizeShopifyId } from "@/utils";

export type ProductType = Awaited<ReturnType<typeof transformProduct>>;
export const transformProduct = (product: CoreProductFragment) => {
    return {
        id: sanitizeShopifyId(product?.id),
        title: product?.title,
        tags: product?.tags,
        variantId: product?.variants.nodes[0].id,
        description: product.description,
        price: {
            amount: product?.variants.nodes[0].priceV2.amount,
            currencyCode: product?.variants.nodes[0].priceV2.currencyCode,
        },
        images: product?.images
            ? product.images.edges.map(({ node }) => node)
            : undefined,
    };
};

export type CollectionType = Awaited<ReturnType<typeof transformCollection>>;
export const transformCollection = (
    collection: CoreCollectionFragment & {
        products?: { nodes?: CoreProductFragment[] };
    }
) => {
    const hasProducts = !!collection.products;

    return {
        id: sanitizeShopifyId(collection.id),
        title: collection?.title,
        image: collection.image,
        ...(hasProducts && {
            products: collection.products?.nodes?.map(transformProduct),
        }),
    };
};

export type CartType = Awaited<ReturnType<typeof transformCart>>;
export const transformCart = (data: GetCartQuery) => {
    if (data?.cart) {
        const { cart } = data;

        return {
            checkoutUrl: cart.checkoutUrl,
            hasItems: Boolean(cart.lines.nodes.length),
            lines: cart.lines.nodes.map((node) => ({
                id: node.id,
                quantity: node.quantity,
                price: {
                    amount: node.merchandise.priceV2.amount,
                    currencyCode: node.merchandise.priceV2.currencyCode,
                },
                product: {
                    tags: node.merchandise.product.tags,
                    title: node.merchandise.product.title,
                    image: node.merchandise.product.images.nodes[0].url,
                    description: node.merchandise.product.description,
                },
            })),
        };
    }
};

export type CheckoutUrlType = Awaited<ReturnType<typeof transformCheckoutUrl>>;
export const transformCheckoutUrl = (data: GetCheckoutUrlQuery) => {
    if (data?.cart && data.cart.checkoutUrl) {
        const {
            cart: { checkoutUrl },
        } = data;
        return checkoutUrl as string;
    }
};
