import { useEffect, useState } from "react";
import { type AppProps } from "next/app";

import { CookieConsent } from "@/components";
import { CartProvider } from "@/contexts";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const [hasAcceptedCookies, setHasAcceptedCookies] = useState(true);

    useEffect(() => {
        const didAcceptCookie = !!localStorage.getItem("cookies");
        setHasAcceptedCookies(didAcceptCookie);
    }, []);

    const handleCookieAcceptance = () => {
        setHasAcceptedCookies(true);
        localStorage.setItem("cookies", "accepted");
    };

    return (
        <CartProvider>
            {!hasAcceptedCookies && (
                <CookieConsent onAcceptCookies={handleCookieAcceptance} />
            )}
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
