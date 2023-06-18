import Cookies from "js-cookie";

import { addLine, createCartWithLine } from "@/storefront/cart.model";
import { CartLineInput } from "@/storefront/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

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
            toast.success("Продуктът е добавен успешно!")
        },
    });
}

export default useAddLineToCart;
