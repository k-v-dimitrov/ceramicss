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
} from "@/types/graphql";

const getProduct = async (id: string) => {
    const { data } = await StoreFrontGateway.query(GetProductDocument, { id });

    return data;
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
    products: { get: getProduct, search: searchProducts },
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
