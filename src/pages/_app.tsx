import "@/styles/globals.css";

import { type AppProps } from "next/app";

import { CookieConsent } from "@/components";
import { useEffect, useState } from "react";

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
        <>
            {!hasAcceptedCookies && (
                <CookieConsent onAcceptCookies={handleCookieAcceptance} />
            )}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
