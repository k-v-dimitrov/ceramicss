import { useDebounce } from "@/hooks";
import { ProductType } from "@/services";
import { useEffect, useState } from "react";
import { Product } from "@/components";

const SearchDesktop = () => {
    // Search state
    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedQuery = useDebounce(searchQuery, 300);
    const [searchResults, setSearchResults] = useState<ProductType[] | null>(
        null
    );

    const executeSearch = async (query: string) => {
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
        setSearchResults(qResult);
    };

    useEffect(() => {
        if (debouncedQuery === "") {
            setSearchResults(null);
        } else {
            executeSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    return (
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full px-2 py-2 mr-3 self-center relative outline">
            <div className="mr-3">
                <div className="icon-search cursor-pointer text-primary-500 text-lg" />
            </div>

            <input
                type="text"
                className="bg-unset mr-2"
                onChange={({ target: { value } }) => setSearchQuery(value)}
                value={searchQuery}
            />

            {/* Search results */}
            {searchResults && (
                <div className="absolute w-full max-h-[600px] overflow-auto top-[45px] right-[0px] z-50 bg-white border">
                    {searchResults.map((p) => (
                        <Product.GridItem key={p.id} product={p} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchDesktop;
