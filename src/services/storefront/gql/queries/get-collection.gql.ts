import { gql } from "@apollo/client";

const query = gql`
    query getProducts($handle: String!) {
        collection(handle: $handle) {
            title
            products(first: 10) {
                nodes {
                    id
                    title
                }
            }
        }
    }
`;

const transform = (data: any) => ({
    title: data.collection.title as string,
    products: data.collection.products.nodes as Array<{
        id: string;
        title: string;
    }>,
});

const GET_COLLECTION = { query, transform };

export default GET_COLLECTION;
