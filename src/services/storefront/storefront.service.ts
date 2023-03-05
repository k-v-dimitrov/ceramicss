import StoreFrontGateway from "./storefront.gateway";
import {
    GET_CART,
    CREATE_CART,
    GET_PRODUCT,
    GET_COLLECTION,
    GET_COLLECTIONS,
    SEARCH_PRODUCTS,
} from "./gql";

const getProduct = async (id: string) => {
    const { query, transform } = GET_PRODUCT;
    const { data } = await StoreFrontGateway.query(query, { id });

    return transform(data);
};

const getCollection = async (handle: string) => {
    const { query, transform } = GET_COLLECTION;
    const { data } = await StoreFrontGateway.query(query, { handle });

    return transform(data);
};

const getCollections = async () => {
    const { query, transform } = GET_COLLECTIONS;
    const { data } = await StoreFrontGateway.query(query);

    return transform(data);
};

const searchProducts = async (searchQuery: string) => {
    const { query, transform } = SEARCH_PRODUCTS;
    const { data } = await StoreFrontGateway.query(query, { searchQuery });

    return transform(data);
};

const createCart = async () => {
    const { query, transform } = CREATE_CART;
    const { data } = await StoreFrontGateway.query(query);

    return transform(data);
};

const getCart = async (id: string) => {
    const { query, transform } = GET_CART;
    const { data } = await StoreFrontGateway.query(query, { id });

    return transform(data);
};

const getCheckoutUrl = async () => null;

const addCartLineItem = async () => null;

const removeCartLineItem = async () => null;

const Storefront = {
    products: { get: getProduct, search: searchProducts },
    collections: { get: getCollection, list: getCollections },
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
