import StoreFrontGateway from "./storefront.gateway";

import {
    GetCartDocument,
    CreateCartDocument,
    GetProductDocument,
    GetCollectionDocument,
    GetCollectionsDocument,
    GetCollectionsIdsDocument,
    GetCollectionProductsDocument,
    SearchProductsDocument,
    GetCheckoutUrlDocument,
    GetProductsDocument,
    GetProductsIdsDocument,
    AddLineDocument,
    CartLineInput,
    RemoveLineDocument,
    UpdateLineDocument,
} from "@/types/graphql";

import { sanitizeShopifyId } from "@/utils";

export type TransformedProduct = Awaited<ReturnType<typeof getProduct>>;
const getProduct = async (id: string) => {
    const {
        data: { product },
    } = await StoreFrontGateway.query(GetProductDocument, { id });

    return {
        id: product?.id,
        title: product?.title,
        tags: product?.tags,
        variantId: product?.variants.nodes[0].id,
        price: {
            amount: product?.variants.nodes[0].priceV2.amount,
            currencyCode: product?.variants.nodes[0].priceV2.currencyCode,
        },
        images: product?.images
            ? product.images.edges.map(({ node }) => node)
            : undefined,
    };
};

export type TransformedProducts = Awaited<ReturnType<typeof getProducts>>;
const getProducts = async () => {
    const {
        data: { products },
    } = await StoreFrontGateway.query(GetProductsDocument);

    if (products.pageInfo.hasNextPage) {
        console.warn(
            "Exceeded maximum of 250 product items. Consider Refactor!"
        );
    }

    const transformedProducts = products.edges.map(({ node }) => {
        const { images, tags, ...restProduct } = node;
        const transformedImages = images.edges.map(({ node }) => node);

        const tag = tags[0].toUpperCase();

        return { product: restProduct, images: transformedImages };
    });

    return transformedProducts;
};

export type TransformedProductIds = Awaited<ReturnType<typeof getProductIds>>;
const getProductIds = async () => {
    const { data } = await StoreFrontGateway.query(GetProductsIdsDocument);

    const ids = data.products.edges.map(({ node }) =>
        sanitizeShopifyId(node.id)
    );

    return ids;
};

export type TransformedCollection = Awaited<ReturnType<typeof getCollection>>;

const getCollection = async (handle: string) => {
    const {
        data: { collection },
    } = await StoreFrontGateway.query(GetCollectionDocument, {
        handle,
    });

    if (collection?.products && collection.title) {
        const { products, title } = collection;

        const transformedProducts = products.nodes.map((productNode) => {
            const { images, variants, tags, ...restProduct } = productNode;
            const transformedImages = images.edges.map(({ node }) => node);

            const transformedVariants = variants.nodes[0].priceV2;

            const tag = tags[0].toUpperCase();

            return {
                ...restProduct,
                images: transformedImages,
                variants: transformedVariants,
                tag,
            };
        });

        return { title, products: transformedProducts };
    }
};

export type TransformedCollectionProducts = Awaited<
    ReturnType<typeof getCollectionProducts>
>;
const getCollectionProducts = async (id: string) => {
    const {
        data: { collection },
    } = await StoreFrontGateway.query(GetCollectionProductsDocument, {
        id,
    });

    if (collection?.products) {
        const { products } = collection;

        const transformedProducts = products.edges.map(({ node }) => {
            const { images, variants, tags, ...restProduct } = node;
            const transformedImages = images.edges.map(({ node }) => node);

            const transformedVariants = variants.nodes[0].priceV2;

            const tag = tags[0].toUpperCase();

            return {
                ...restProduct,
                images: transformedImages,
                variants: transformedVariants,
                tag,
            };
        });

        return transformedProducts;
    }
};

export type TransformedCollections = Awaited<ReturnType<typeof getCollections>>;
const getCollections = async () => {
    const { data } = await StoreFrontGateway.query(GetCollectionsDocument);

    const transformedCollection = data.collections.nodes.map((node) => node);

    return transformedCollection;
};

export type TransformedCollectionIds = Awaited<
    ReturnType<typeof getCollectionIds>
>;
const getCollectionIds = async () => {
    const { data } = await StoreFrontGateway.query(GetCollectionsIdsDocument);

    const transformedCollectionIds = data.collections.nodes.map((node) => node);

    return transformedCollectionIds;
};

export type TransformedSearchedProducts = Awaited<
    ReturnType<typeof searchProducts>
>;
const searchProducts = async (query: string) => {
    const { data } = await StoreFrontGateway.query(SearchProductsDocument, {
        query,
    });

    const transformedProducts = data.products.nodes.map((node) => node.title);

    return transformedProducts;
};

export type TransformedCreateCart = Awaited<ReturnType<typeof createCart>>;
const createCart = async () => {
    const { data } = await StoreFrontGateway.mutate(CreateCartDocument);

    if (data?.cartCreate && data.cartCreate.cart) {
        const {
            cartCreate: { cart },
        } = data;

        return cart;
    }
};

export type TransformedGetCart = Awaited<ReturnType<typeof getCart>>;
const getCart = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCartDocument, { id });

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

export type TransformedCheckoutUrl = Awaited<ReturnType<typeof getCheckoutUrl>>;
const getCheckoutUrl = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCheckoutUrlDocument, {
        id,
    });

    if (data?.cart && data.cart.checkoutUrl) {
        const {
            cart: { checkoutUrl },
        } = data;
        return checkoutUrl;
    }

    return data;
};

const addCartLineItem = async (cartId: string, lines: CartLineInput[]) => {
    const { data } = await StoreFrontGateway.mutate(AddLineDocument, {
        cartId,
        lines,
    });

    return data;
};

const removeCartLineItem = async (cartId: string, lineId: string) => {
    const { data } = await StoreFrontGateway.mutate(RemoveLineDocument, {
        cartId,
        lineIds: [lineId],
    });

    return data;
};

const updateCartLineItem = async (
    cartId: string,
    payload: { id: string; quantity: number }
) => {
    const { data } = await StoreFrontGateway.mutate(UpdateLineDocument, {
        cartId,
        lines: [{ id: payload.id, quantity: payload.quantity }],
    });

    return data;
};

const Storefront = {
    products: {
        get: getProduct,
        search: searchProducts,
        all: getProducts,
        ids: getProductIds,
    },
    collections: {
        get: getCollection,
        list: getCollections,
        listIds: getCollectionIds,
        products: getCollectionProducts,
    },
    checkout: {
        url: getCheckoutUrl,
    },
    cart: {
        get: getCart,
        create: createCart,
        lineItems: {
            add: addCartLineItem,
            remove: removeCartLineItem,
            update: updateCartLineItem,
        },
    },
};

export default Storefront;
