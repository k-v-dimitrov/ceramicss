import { useEffect, useState } from "react";

import { type CartType } from "@/services";
import { CartLineInput, CartLineUpdateInput } from "@/types/graphql";

const initialState: {
    data: CartType | null;
    error: unknown;
    isLoading: boolean;
} = {
    data: null,
    error: null,
    isLoading: true,
};

const useCart = () => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(initialState);

        fetch(`/api/cart`)
            .then((res) => res.json())
            .then((data) => setState((prevState) => ({ ...prevState, data })))
            .catch((error) =>
                setState((prevState) => ({ ...prevState, error }))
            )
            .finally(() =>
                setState((prevState) => ({ ...prevState, isLoading: false }))
            );
    }, []);

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
        return fetch("/api/cart/lines/add", {
            method: "POST",
            body: JSON.stringify({ line }),
            headers: {
                "Content-Type": "application/json",
            },
        });
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

    return {
        cart: state.data,
        error: state.error,
        isLoading: state.isLoading,
        removeItem,
        addItem,
        updateItem,
    };
};

export default useCart;
