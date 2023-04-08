import { type FC } from "react";
import Image from "next/image";

import ImageRotatorProps, { ShopifyImage } from "./image-rotator.props";

const ImageRotator: FC<ImageRotatorProps> = ({
    images,
    setSpotlightImage,
    spotlightImage,
}) => {
    const handleSpotlightImageSelection = (image: ShopifyImage) => {
        return () => {
            setSpotlightImage && setSpotlightImage(image);
        };
    };

    return (
        <>
            <Image
                alt={spotlightImage?.altText || ""}
                src={spotlightImage?.url}
                width={640}
                height={640}
            />

            <ul className="grid grid-cols-3">
                {images?.map((image) => (
                    <Image
                        key={image.url}
                        alt={image?.altText || ""}
                        src={image?.url}
                        width={200}
                        height={200}
                        className="hover:cursor-pointer"
                        onClick={handleSpotlightImageSelection(image)}
                    />
                ))}
            </ul>
        </>
    );
};

export default ImageRotator;
