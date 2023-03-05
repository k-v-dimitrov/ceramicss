import { gql } from "@apollo/client";

const query = gql`
    mutation createCart {
        cartCreate(input: {}) {
            cart {
                id
                checkoutUrl
            }
        }
    }
`;

export const transform = (data: any) => ({
    id: data.cartCreate.cart.id as string,
    checkoutUrl: data.cartCreate.cart.checkoutUrl as string,
});

const CREATE_CART = { query, transform };

export default CREATE_CART;
