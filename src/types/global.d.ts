declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SHOPIFY_STOREFRONT_ENDPOINT: string;
            SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
        }
    }
}

export {};
