import "@/global.css";

import { type AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header, Footer } from "@/components";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: Infinity
        },
    },
});

function MyApp({ pageProps, Component }: AppProps) {
    return (
        <>
            <Toaster position="bottom-center" />

            <QueryClientProvider client={queryClient}>
                <Header />
                <main className="p-3 pb-4 pt-[96px]">
                    <Component {...pageProps} />
                </main>
                <Footer />

                <ReactQueryDevtools
                    position="bottom-right"
                    initialIsOpen={false}
                />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
