import { gql } from "@apollo/client";

const query = gql`
    query getCart($id: ID!) {
        cart(id: $id) {
            id
            checkoutUrl
        }
    }
`;

const transform = (data: any) => ({
    id: data.cart.id as string,
    checkoutUrl: data.cart.checkoutUrl as string,
});

const GET_CART = { query, transform };

export default GET_CART;
