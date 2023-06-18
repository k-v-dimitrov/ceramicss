import Cookies from "js-cookie";

import { updateLine } from "@/libs/genql/cart.model";
import { CartLineUpdateInput } from "@/libs/genql/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useUpdateCartLine() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-line-mutation"],
        async mutationFn(line: CartLineUpdateInput) {
            const cartId = Cookies.get("cart-id");

            if (!cartId) {
                return;
            }

            const { cart } = await updateLine(cartId, line);

            return cart;
        },
        onSuccess(cart) {
            if (cart) {
                queryClient.setQueryData(["cart-query"], cart);
            }
        },
    });
}

export default useUpdateCartLine;
