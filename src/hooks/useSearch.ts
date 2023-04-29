import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ProductType } from "@/services";

interface State {
    error: unknown;
    isLoading: boolean;
    products: ProductType[] | null;
}

const initialState: State = {
    error: null,
    products: null,
    isLoading: true,
};

const useSearch = () => {
    const router = useRouter();
    const query = router.query.searchQuery as string | undefined;
    const [state, setState] = useState<State>(initialState);

    useEffect(() => {
        const search = async () => {
            setState(initialState);

            try {
                const response = await fetch("/api/search", {
                    method: "POST",
                    body: JSON.stringify({ query }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const { data } = await response.json();

                setState((p) => ({
                    ...p,
                    products: data?.length > 0 ? data : null,
                }));
            } catch (error) {
                setState((p) => ({ ...p, error }));
            } finally {
                setState((p) => ({ ...p, isLoading: false }));
            }
        };

        if (!query) {
            return;
        }

        (async () => search())();
    }, [query]);

    return { ...state, query };
};
export default useSearch;
