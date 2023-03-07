import {
    ApolloClient,
    InMemoryCache,
    type QueryOptions,
    type MutationOptions,
    OperationVariables,
} from "@apollo/client";

const endpoint = process.env.SHOPIFY_STOREFRONT_ENDPOINT;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const client = new ApolloClient({
    uri: endpoint,
    headers: {
        "X-Shopify-Storefront-Access-Token": accessToken,
    },
    cache: new InMemoryCache({ addTypename: false }),
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
