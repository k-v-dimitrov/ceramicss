import StoreFrontGateway from "./storefront.gateway";

import {
    GetCartDocument,
    CreateCartDocument,
    GetProductDocument,
    GetCollectionDocument,
    GetCollectionsDocument,
    SearchProductsDocument,
    GetCheckoutUrlDocument,
    GetProductsDocument,
    AddLineDocument,
    CartLineInput,
    RemoveLineDocument,
    UpdateLineDocument,
} from "@/types/graphql";

import { sanitizeShopifyId } from "@/utils";
import {
    transformCart,
    transformCheckoutUrl,
    transformCollection,
    transformProduct,
} from "./storefront.transform";

const getProduct = async (id: string) => {
    const {
        data: { product },
    } = await StoreFrontGateway.query(GetProductDocument, { id });

    if (!product) {
        throw new Error(`Product with id ${id} could not be fetched`);
    }

    return transformProduct(product);
};

const getProducts = async () => {
    const {
        data: { products },
    } = await StoreFrontGateway.query(GetProductsDocument);

    if (products.pageInfo.hasNextPage) {
        console.warn(
            "Exceeded maximum of 250 product items. Consider Refactor!"
        );
    }

    return products.nodes.filter((x) => !x).map(transformProduct);
};

const searchProducts = async (query: string) => {
    const {
        data: { products },
    } = await StoreFrontGateway.query(SearchProductsDocument, {
        query,
    });

    return products.nodes.filter((x) => !x).map(transformProduct);
};

const getProductIds = async () => {
    const products = await getProducts();

    return products.map((p) => sanitizeShopifyId(p.id));
};

const getCollection = async (handle: string) => {
    const {
        data: { collection },
    } = await StoreFrontGateway.query(GetCollectionDocument, {
        handle,
    });

    if (!collection) {
        throw new Error(`Could not fetch collection with id ${handle}`);
    }

    return transformCollection(collection);
};

const getCollections = async () => {
    const { data } = await StoreFrontGateway.query(GetCollectionsDocument);

    return data.collections.nodes.filter((x) => !x).map(transformCollection);
};

const getCollectionProducts = async (handle: string) => {
    const { products } = await getCollection(handle);

    return products;
};

const getCollectionIds = async () => {
    const collections = await getCollections();

    return collections.map((c) => ({ id: c.id, title: c.title }));
};

const createCart = async () => {
    const { data } = await StoreFrontGateway.mutate(CreateCartDocument);

    if (data?.cartCreate && data.cartCreate.cart) {
        const {
            cartCreate: { cart },
        } = data;

        return cart;
    }
};

const getCart = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCartDocument, { id });

    return transformCart(data);
};

const getCheckoutUrl = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCheckoutUrlDocument, {
        id,
    });

    return transformCheckoutUrl(data);
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
