import "@/global.css";

import { type AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header, Footer } from "@/components";
import { DefaultSeo } from "next-seo";
import { CookieConsent } from "@/components/cookie-consent";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: Infinity,
        },
    },
});

function MyApp({ pageProps, Component }: AppProps) {
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: "website",
                    url: "https://ceramicss.eu",
                    description:
                        "CeramicsS е вашият магазин за красиви ръчно изработени керамични изделия. Нашите продукти се изработват с любов и грижа, гарантирайки уникалността и високото качество на всеки един артикул. CeramicsS се фокусира върху устойчивото и етично производство. Разгледайте нашата колекция днес и си донесете допълнително изкуство и елегантност. Не просто магазин за красиви керамични изделия!",
                    siteName: "CeramicsS",
                    images: [
                        {
                            url: "/images/landing/cover-11.webp",
                            width: 1534,
                            height: 1543,
                            alt: "CeramicsS landing page image",
                            type: "image/webp",
                        },
                    ],
                }}
                description="CeramicsS е вашият магазин за красиви ръчно изработени керамични изделия. Нашите продукти се изработват с любов и грижа, гарантирайки уникалността и високото качество на всеки един артикул. CeramicsS се фокусира върху устойчивото и етично производство. Разгледайте нашата колекция днес и си донесете допълнително изкуство и елегантност. Не просто магазин за красиви керамични изделия!"
            />

            <Toaster
                position="bottom-center"
                toastOptions={{ duration: 3000 }}
            />

            <CookieConsent />

            <QueryClientProvider client={queryClient}>
                <Header />
                <main className="p-3 pb-4 pt-[calc(var(--header-height)+16px)] min-h-[calc(100vh-var(--footer-height))]">
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
