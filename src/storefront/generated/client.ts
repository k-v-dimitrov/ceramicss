import { createClient } from ".";

const client = createClient({
    url: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
        "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
});

export default client;
