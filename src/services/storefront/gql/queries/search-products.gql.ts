import { gql } from "@apollo/client";

const query = gql`
    query searchProducts($searchQuery: String!) {
        products(first: 20, query: $searchQuery) {
            nodes {
                title
            }
        }
    }
`;

export const transform = (data: any) =>
    data.products.nodes.map((node: any) => ({
        title: node.title,
    })) as Array<{ title: string }>;

const SEARCH_PRODUCTS = { query, transform };

export default SEARCH_PRODUCTS;
