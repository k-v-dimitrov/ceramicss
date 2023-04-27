import { Product } from "@/components/product";
import useSearch from "@/hooks/useSearch";
import { useCallback } from "react";

const SearchToggler = ({
    requestMobileSearch,
}: {
    requestMobileSearch: () => void;
}) => {
    return (
        <div className="pb-4 px-3" onClick={requestMobileSearch}>
            <div className="flex items-center bg-gray-300 rounded-full px-2 py-2 self-center">
                <input
                    type="text"
                    className="bg-unset ml-2 placeholder-gray-600 w-full"
                    placeholder="Какво търсите?"
                />

                <div className="icon-search cursor-pointer text-primary-500 text-lg mr-2" />
            </div>
        </div>
    );
};

export const SearchMobile = () => {
    const { searchResults, searchQuery, setSearchQuery, isLoading } =
        useSearch();

    const callbackInputRef = useCallback((ref: HTMLInputElement) => {
        if (ref) {
            ref.focus();
        }
    }, []);

    return (
        <>
            <div className="flex items-center bg-gray-300 rounded-full px-2 py-2 self-center w-[80%]">
                <input
                    ref={callbackInputRef}
                    type="text"
                    className="bg-unset ml-2 placeholder-gray-600 w-full focus:outline-none"
                    onChange={({ target: { value } }) => setSearchQuery(value)}
                    value={searchQuery}
                />
            </div>
            <div>
                {/* Search results */}
                {searchResults && (
                    <div className="fixed w-full h-full overflow-auto top-[75px] right-[0px] z-50 bg-white border p-6">
                        {searchResults.map((p) => (
                            <Product.Searched key={p.id} product={p} />
                        ))}

                        {/* Spacer */}
                        <div className="h-[50px] w-full" />
                    </div>
                )}
                {!isLoading && searchQuery && !searchResults && (
                    <div className="fixed w-full h-full overflow-auto top-[75px] right-[0px] z-50 bg-white border p-6">
                        Не намерихме такъв продукт!
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchToggler;
