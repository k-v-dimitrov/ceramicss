import { type Client as ClientType } from "shopify-buy";
import Client from "shopify-buy";

class ShopifyClient {
    private static instance: ShopifyClient;
    private shopifyClient: ClientType;

    private constructor() {
        this.shopifyClient = Client.buildClient({
            domain: process.env.SHOPIFY_DOMAIN_NAME,
            storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });
    }

    public static getInstance(): ShopifyClient["shopifyClient"] {
        if (!ShopifyClient.instance) {
            ShopifyClient.instance = new ShopifyClient();
        }

        return ShopifyClient.instance.shopifyClient;
    }
}

export { ShopifyClient };
