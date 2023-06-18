import { client } from "@/storefront";
import { useQuery } from "@tanstack/react-query";

function useSearchProducts(query: string) {
    return useQuery({
        queryKey: ["search-query", query],
        queryFn: async ({ queryKey }) => {
            const { products } = await client.query({
                products: {
                    __args: {
                        first: 250,
                        query: queryKey[1],
                    },
                    nodes: {
                        id: true,
                        title: true,
                        images: {
                            __args: {
                                first: 1,
                            },
                            nodes: {
                                id: true,
                                url: true,
                                altText: true,
                            },
                        },
                        productType: true,
                        variants: {
                            __args: {
                                first: 1,
                            },
                            nodes: {
                                priceV2: {
                                    amount: true,
                                    currencyCode: true,
                                },
                            },
                        },
                    },
                },
            });

            return products;
        },
    });
}

export default useSearchProducts;
