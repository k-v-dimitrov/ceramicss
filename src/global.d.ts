declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT: string;
            NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
        }
    }
}

export {};
