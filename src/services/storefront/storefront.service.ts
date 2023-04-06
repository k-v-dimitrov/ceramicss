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
} from "@/types/graphql";

import { sanitizeShopifyId } from "@/utils";

export type TransformedProduct = Awaited<ReturnType<typeof getProduct>>;
const getProduct = async (id: string) => {
    const {
        data: { product },
    } = await StoreFrontGateway.query(GetProductDocument, { id });

    if (product?.images) {
        const { images, ...restProduct } = product;

        const transformedImages = images.edges.map(({ node }) => node);
        return { ...restProduct, images: transformedImages };
    }
};

export type TransformedProducts = Awaited<ReturnType<typeof getProducts>>;
const getProducts = async () => {
    const {
        data: { products },
    } = await StoreFrontGateway.query(GetProductsDocument);

    const transformedProducts = products.edges.map(({ node }) => {
        const { images, ...restProduct } = node;
        const transformedImages = images.edges.map(({ node }) => node);

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
            const { images, ...restProduct } = productNode;
            const transformedImages = images.edges.map(({ node }) => node);

            return { ...restProduct, images: transformedImages };
        });

        return { title, products: transformedProducts };
    }
};

export type TransformedCollections = Awaited<ReturnType<typeof getCollection>>;
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
            const { images, ...restProduct } = node;
            const transformedImages = images.edges.map(({ node }) => node);

            return { product: restProduct, images: transformedImages };
        });

        return transformedProducts;
    }
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
        return cart;
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

const addCartLineItem = async () => null;

const removeCartLineItem = async () => null;

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
        },
    },
};

export default Storefront;
