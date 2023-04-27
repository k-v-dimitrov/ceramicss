import { Product } from "@/components";
import useSearch from "@/hooks/useSearch";

const SearchDesktop = () => {
    const { searchResults, searchQuery, setSearchQuery, isLoading } =
        useSearch();

    return (
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full px-2 py-2 mr-3 self-center relative">
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
            {!isLoading && searchQuery && !searchResults && (
                <div className="absolute w-full max-h-[600px] overflow-auto top-[45px] right-[0px] z-50 bg-white border p-2">
                    Не намерихме такъв продукт!
                </div>
            )}
        </div>
    );
};

export default SearchDesktop;
