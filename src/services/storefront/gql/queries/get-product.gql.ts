import { gql } from "@apollo/client";

const query = gql`
    query getProduct($id: ID!) {
        product(id: $id) {
            title
        }
    }
`;

export const transform = (data: any) => ({
    title: data.product.title as string,
});

const GET_PRODUCT = { query, transform };

export default GET_PRODUCT;
