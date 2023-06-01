import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

import { fetchCart } from "@/libs/genql/cart.model";

function useCartQuery() {
    return useQuery({
        queryKey: ["cart-query"],
        async queryFn() {
            const cartId = Cookies.get("cart-id");

            if (!cartId) {
                return null;
            }

            const cart = await fetchCart(cartId);

            return cart;
        },
    });
}

export default useCartQuery;
