import { ProductType } from "@/services";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useSearch = () => {
    // Search state
    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedQuery = useDebounce(searchQuery, 300);
    const [searchResults, setSearchResults] = useState<ProductType[] | null>(
        null
    );

    const [isLoading, setIsLoading] = useState(true);

    const executeSearch = async (query: string) => {
        setIsLoading(true);

        if (!query || query === "") {
            return null;
        }

        const res = await fetch("/api/search", {
            method: "POST",
            body: JSON.stringify({
                query,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const qResult = (await res.json()) as ProductType[];
        setSearchResults(() => (qResult.length > 0 ? qResult : null));
        setIsLoading(false);
    };

    useEffect(() => {
        if (searchQuery !== "") {
            setIsLoading(true);
        }
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedQuery === "") {
            setSearchResults(null);
        } else {
            executeSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    return {
        setSearchQuery,
        searchResults,
        searchQuery,
        isLoading,
    };
};

export default useSearch;
