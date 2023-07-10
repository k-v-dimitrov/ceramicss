import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeLine } from "@/storefront/cart.model";

function useRemoveCartLine() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["remove-line-mutation"],
        async mutationFn(lineId: string) {
            const cartId = Cookies.get("cart-id");

            if (!cartId) {
                return;
            }

            const { cart } = await removeLine(cartId, lineId);

            return cart;
        },
        onSuccess(cart) {
            if (!cart) {
                return;
            }

            queryClient.setQueryData(["cart-query"], cart);
        },
    });
}

export default useRemoveCartLine;
