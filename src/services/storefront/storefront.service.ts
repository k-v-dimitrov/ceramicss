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

const getProducts = async () => {
    const { data } = await StoreFrontGateway.query(GetProductsDocument);

    return data;
};

const getProductIds = async () => {
    const { data } = await StoreFrontGateway.query(GetProductsIdsDocument);

    const ids = data.products.edges.map(({ node }) =>
        sanitizeShopifyId(node.id)
    );

    return ids;
};

const getCollection = async (handle: string) => {
    const { data } = await StoreFrontGateway.query(GetCollectionDocument, {
        handle,
    });

    return data;
};

const getCollections = async () => {
    const { data } = await StoreFrontGateway.query(GetCollectionsDocument);

    return data;
};

const getCollectionIds = async () => {
    const { data } = await StoreFrontGateway.query(GetCollectionsIdsDocument);

    return data;
};

const getCollectionProducts = async (id: string) => {
    const { data } = await StoreFrontGateway.query(
        GetCollectionProductsDocument,
        {
            id,
        }
    );

    return data;
};

const searchProducts = async (query: string) => {
    const { data } = await StoreFrontGateway.query(SearchProductsDocument, {
        query,
    });

    return data;
};

const createCart = async () => {
    const { data } = await StoreFrontGateway.mutate(CreateCartDocument);

    return data;
};

const getCart = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCartDocument, { id });

    return data;
};

const getCheckoutUrl = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetCheckoutUrlDocument, {
        id,
    });

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
