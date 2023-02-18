declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SHOPIFY_DOMAIN_NAME: string;
      SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
    }
  }
}

export {};
