import { useEffect, useState } from "react";

import { type CartType } from "@/services";
import { CartLineInput, CartLineUpdateInput } from "@/types/graphql";
import { rebuildShopifyProductId } from "@/utils";

const initialState: {
    cartData: CartType | null;
    error: unknown;
    isLoading: boolean;
    refreshFlag: boolean;
} = {
    cartData: null,
    error: null,
    isLoading: true,
    refreshFlag: false,
};

const useCart = () => {
    const [state, setState] = useState(initialState);

    const refreshCartState = () => {
        fetch(`/api/cart`)
            .then((res) => res.json())
            .then((data) =>
                setState((prevState) => ({ ...prevState, cartData: data }))
            )
            .catch((error) =>
                setState((prevState) => ({ ...prevState, error }))
            )
            .finally(() =>
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    refreshFlag: false,
                }))
            );
    };

    useEffect(() => {
        setState(initialState);
        refreshCartState();
    }, []);

    useEffect(() => {
        if (state.refreshFlag) {
            refreshCartState();
        }
    }, [state.refreshFlag]);

    async function removeItem(lineId: string) {
        return fetch("/api/cart/lines/remove", {
            method: "POST",
            body: JSON.stringify({ lineId }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async function addItem(line: CartLineInput) {
        const res = await fetch("/api/cart/lines/add", {
            method: "POST",
            body: JSON.stringify({ line }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setState((prevState) => ({ ...prevState, refreshFlag: true }));

        return res;
    }

    async function updateItem(line: CartLineUpdateInput) {
        return fetch("/api/cart/lines/update", {
            method: "POST",
            body: JSON.stringify({ line }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    function isProductInCart(productId: string) {
        const asd = !!state.cartData?.lines.find(
            (line) => line.product.id === rebuildShopifyProductId(productId)
        );

        return asd;
    }

    return {
        cart: state.cartData,
        error: state.error,
        isLoading: state.isLoading,
        removeItem,
        addItem,
        updateItem,
        isProductInCart,
    };
};

export default useCart;
