import Image from "next/image";

import type { ProductProps } from "../product.props";

const GridProduct: React.FC<ProductProps> = ({ product }) => {
    const coverImage = product?.images[0];

    return (
        <div className="p-10">
            <Image
                src={coverImage?.url}
                alt={coverImage?.altText || ""}
                width={350}
                height={350}
            />

            <p className="text-gray-600 text-sm">{product?.tag}</p>

            <div className="flex justify-between mt-2">
                <p className="text-lg font-bold">{product?.title}</p>
                <p className="font-light">
                    {product?.variants.amount}
                    {product?.variants.currencyCode}
                </p>
            </div>

            {/* TODO: button */}
        </div>
    );
};

export default GridProduct;
