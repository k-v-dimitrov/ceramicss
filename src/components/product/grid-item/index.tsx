import Link from "next/link";
import Image from "next/image";

import { formatPrice, sanitizeShopifyId } from "@/utils";

import type { ProductProps } from "../product.props";

const GridProduct: React.FC<ProductProps> = ({ product }) => {
    const coverImage = product?.images?.[0];

    if (!product?.id) {
        return null;
    }

    const sanitizedProductId = sanitizeShopifyId(product?.id);

    return (
        <Link
            href={`/product/${sanitizedProductId}`}
            className="hover:underline"
        >
            <div className="p-10">
                <Image
                    src={coverImage?.url}
                    alt={coverImage?.altText || ""}
                    width={350}
                    height={350}
                />

                <p className="text-gray-600 text-sm mt-1 capitalize">{product?.tags[0]}</p>

                <div className="flex justify-between mt-2">
                    <p className="text-lg font-bold text-gray-700">
                        {product?.title}
                    </p>
                    <p className="font-light text-gray-700">
                        {formatPrice(product?.price.amount)}
                        {product?.price.currencyCode}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default GridProduct;
