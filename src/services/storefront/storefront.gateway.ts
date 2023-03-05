import {
    ApolloClient,
    InMemoryCache,
    type QueryOptions,
    type MutationOptions,
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
    query: async (
        query: QueryOptions["query"],
        variables: QueryOptions["variables"] = {}
    ) => client.query({ query, variables }),
    mutate: async (
        mutation: MutationOptions["mutation"],
        variables: MutationOptions["variables"] = {}
    ) => client.mutate({ mutation, variables }),
};

export default StoreFrontGateway;
