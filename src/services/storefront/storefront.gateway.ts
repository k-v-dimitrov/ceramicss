import {
    ApolloClient,
    InMemoryCache,
    type QueryOptions,
    type MutationOptions,
    OperationVariables,
    DefaultOptions,
} from "@apollo/client";

const endpoint = process.env.SHOPIFY_STOREFRONT_ENDPOINT;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
    },
    query: {
        fetchPolicy: "no-cache",
    },
};

const client = new ApolloClient({
    uri: endpoint,
    headers: {
        //@ts-ignore
        "X-Shopify-Storefront-Access-Token": accessToken,
    },
    cache: new InMemoryCache(),
    defaultOptions,
});

const StoreFrontGateway = {
    query: async <
        T = any,
        TVariables extends OperationVariables = OperationVariables
    >(
        query: QueryOptions<TVariables, T>["query"],
        variables?: QueryOptions<TVariables, T>["variables"]
    ) => client.query({ query, variables }),
    mutate: async <
        T = any,
        TVariables extends OperationVariables = OperationVariables
    >(
        mutation: MutationOptions<T, TVariables>["mutation"],
        variables?: MutationOptions<T, TVariables>["variables"]
    ) => client.mutate({ mutation, variables }),
};

export default StoreFrontGateway;
