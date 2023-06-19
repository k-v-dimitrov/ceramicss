import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

import { fetchCart } from "@/storefront/cart.model";

function useCartQuery() {
    return useQuery({
        queryKey: ["cart-query"],
        async queryFn() {
            const cartId = Cookies.get("cart-id");

            if (!cartId) {
                return null;
            }

            const cart = await fetchCart(cartId);

            if (!cart) {
                Cookies.remove("cart-id");
                return null;
            }

            return cart;
        },
    });
}

export default useCartQuery;
