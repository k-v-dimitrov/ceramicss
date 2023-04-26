import { Dispatch, SetStateAction } from "react";

export type ShopifyImage = {
    altText?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    id?: string | null | undefined;
    url: any;
};

interface ImageRotatorProps {
    spotlightImage?: ShopifyImage;
    setSpotlightImage?: Dispatch<SetStateAction<ShopifyImage | undefined>>;
    images?: ShopifyImage[];
}

export default ImageRotatorProps;
