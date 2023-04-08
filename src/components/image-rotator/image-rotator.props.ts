import { Dispatch, SetStateAction } from "react";

type ShopifyImage = {
    altText?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    id?: string | null | undefined;
    url: any;
};

interface ImageRotatorProps {
    spotlightImage: ShopifyImage;
    setSpotlightImage: Dispatch<SetStateAction<ShopifyImage>>;
    images: ShopifyImage[];
}

export default ImageRotatorProps;
