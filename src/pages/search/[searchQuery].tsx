import Head from "next/head";
import { type NextPage } from "next";
import ReactLoading from "react-loading";

import { Footer, Header, Product } from "@/components";
import useSearch from "@/hooks/useSearch";

const Search: NextPage = () => {
    const { error, products, isLoading, query } = useSearch();

    return (
        <>
            <Head>
                <title>Search - Ceramicss</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="noindex"></meta>
            </Head>

            <Header />

            {isLoading && (
                <div className="w-full flex justify-center items-center h-[340px]">
                    <ReactLoading
                        type="spin"
                        color={"#006AAC"}
                        width={"50px"}
                    />
                </div>
            )}

            <div className="py-4 px-2 md:px-6">
                {!error && !isLoading && (
                    <>
                        {products && (
                            <h1 className="text-2xl text-primary-500 font-bold mb-4">
                                Резултати за &quot;{query}&quot;
                            </h1>
                        )}

                        {!products && (
                            <h1 className="text-2xl text-primary-500 font-bold mb-4">
                                Няма намерени резултати за &quot;{query}&quot;
                            </h1>
                        )}
                    </>
                )}

                {!isLoading && !error && products && (
                    <div className="md:grid grid-cols-3 gap-12">
                        {products.map((product) => (
                            <Product.GridItem
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Search;
