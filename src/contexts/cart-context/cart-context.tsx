import { useCart } from "@/hooks";
import { createContext, ReactNode } from "react";

type UseCartType = Partial<ReturnType<typeof useCart>>;

const CartContext = createContext<UseCartType>({ isLoading: true });
CartContext.displayName = "Cart Context";

export function CartProvider({
    children,
}: {
    children: ReactNode | string;
}): JSX.Element {
    const cart = useCart();
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export default CartContext;
