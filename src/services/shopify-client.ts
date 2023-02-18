import { type Client as ClientType } from "shopify-buy";
import Client from "shopify-buy";
import {
    rebuildShopifyCollectionId,
    rebuildShopifyProductId,
    sanitizeShopifyId,
} from "src/utils";
import { Collection, Product, ShopifyImage } from "src/types/shared";

class ShopifyClient {
    private static instance: ShopifyClient;
    private shopifyClient: ClientType;

    private constructor() {
        console.log({
            domain: process.env.SHOPIFY_DOMAIN_NAME,
            storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });

        this.shopifyClient = Client.buildClient({
            domain: process.env.SHOPIFY_DOMAIN_NAME,
            storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });
    }

    public static getInstance(): ShopifyClient {
        if (!ShopifyClient.instance) {
            ShopifyClient.instance = new ShopifyClient();
        }

        return ShopifyClient.instance;
    }

    public getShopifyClient() {
        return this.shopifyClient;
    }

    public async getAllCollections({
        shouldReturnOnlyIds = false,
        shouldSanitizeIds = true,
    }) {
        const rawCollections = await this.shopifyClient.collection.fetchAll();

        const collections: Partial<Collection>[] = rawCollections.map(
            (collection: any) =>
                ({
                    ...(!shouldReturnOnlyIds && { title: collection.title }),
                    id: shouldSanitizeIds
                        ? sanitizeShopifyId(collection.id)
                        : collection.id,
                } as Collection)
        );

        return collections;
    }

    public async fetchCollectionProducts(collectionId: string) {
        const collectionWithProducts =
            (await this.shopifyClient.collection.fetchWithProducts(
                rebuildShopifyCollectionId(collectionId)
            )) as any;

        const rawProductsFromCollection = collectionWithProducts.products;

        const productsFromCollection: Product[] = rawProductsFromCollection.map(
            (rawProduct: any): Product => mapToKnownShopifyProduct(rawProduct)
        );

        return productsFromCollection;
    }

    public async getAllProductIds({ shouldSanitizeIds = true }) {
        const collections =
            await this.shopifyClient.collection.fetchAllWithProducts();

        const allProductIds = collections
            .map((collection) => {
                return collection.products.map((rawProduct: any) => ({
                    id: shouldSanitizeIds
                        ? sanitizeShopifyId(rawProduct.id)
                        : rawProduct.id,
                }));
            })
            .flat();

        return allProductIds;
    }

    public async getProductById(productId: string) {
        const rawProduct: any = await this.shopifyClient.product.fetch(
            rebuildShopifyProductId(productId)
        );

        return mapToKnownShopifyProduct(rawProduct);
    }
}

const mapToKnownShopifyProduct = (rawProduct: any): Product => ({
    title: rawProduct.title,
    createdAt: rawProduct.createdAt,
    description: rawProduct.description,
    // descriptionHtml: rawProduct.descriptionHtml,
    id: rawProduct.id,
    images: rawProduct.images.map((image: any): ShopifyImage => {
        return {
            id: image.id,
            src: image.src,
            height: image.height,
            width: image.width,
            altText: image.altText,
        };
    }),
    updatedAt: rawProduct.updatedAt,
});

export { ShopifyClient };
