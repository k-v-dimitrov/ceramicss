import Cookies from "js-cookie";

import { addLine, createCartWithLine } from "../libs/genql/cart.model";
import { CartLineInput } from "../libs/genql/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useAddLineToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["add-line-mutation"],
        mutationFn: async function (line: CartLineInput) {
            const cartId = Cookies.get("cart-id");

            if (!cartId) {
                const { cart } = await createCartWithLine(line);

                Cookies.set("cart-id", cart?.id!);

                return cart;
            }

            const { cart } = await addLine(cartId, line);

            return cart;
        },
        onSuccess(cart) {
            queryClient.setQueryData(["cart-query"], cart);
        },
    });
}

export default useAddLineToCart;
