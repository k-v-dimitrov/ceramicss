import { useState, type FC } from "react";
import Image from "next/image";

interface Props {
    images?: {
        altText?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        id?: string | null | undefined;
        url: any;
    }[];
}

const ImageRotator: FC<Props> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images?.[0]);

    return (
        <>
            <Image
                className="w-full rounded-lg brightness-95"
                alt={currentImage?.altText || ""}
                src={currentImage?.url}
                width={640}
                height={640}
                quality={80}
                priority
            />

            <ul className="grid grid-cols-3 gap-3 mt-3">
                {images
                    ?.filter((image) => image.id !== currentImage?.id)
                    .map((image) => (
                        <Image
                            key={image.url}
                            alt={image?.altText || ""}
                            src={image?.url}
                            width={480}
                            height={480}
                            quality={40}
                            className="hover:cursor-pointer rounded-lg brightness-95"
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
            </ul>
        </>
    );
};

export default ImageRotator;
