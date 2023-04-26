declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SHOPIFY_DOMAIN_NAME: string;
        }
    }
}

export {};
