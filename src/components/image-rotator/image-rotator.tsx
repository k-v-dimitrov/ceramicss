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
        <div className="m-6 lg:m-0 lg:px-24">
            <Image
                className="w-full rounded-lg"
                alt={spotlightImage?.altText || ""}
                src={spotlightImage?.url}
                width={640}
                height={640}
            />

            <ul className="grid grid-cols-3 gap-1 mt-2">
                {images?.map((image) => (
                    <Image
                        key={image.url}
                        alt={image?.altText || ""}
                        src={image?.url}
                        width={640}
                        height={640}
                        className="hover:cursor-pointer rounded-lg"
                        onClick={handleSpotlightImageSelection(image)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ImageRotator;
