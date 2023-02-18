export type Collection = {
    title: string;
    id: string;
};

export type Product = {
    id: string;
    createdAt: string;
    updatedAt: string;
    descriptionHtml?: string;
    description: string;
    title: string;
    images: string[];
};

export type ShopifyImage = {
    id: string;
    src: string;
    altText: string;
    width: number;
    height: number;
};
