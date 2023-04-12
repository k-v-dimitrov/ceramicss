import { useEffect, useState } from "react";

import { type TransformedGetCart } from "@/services";

const initialState: {
    data: TransformedGetCart | null;
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

    return { cart: state.data, error: state.error, isLoading: state.isLoading };
};

export default useCart;
