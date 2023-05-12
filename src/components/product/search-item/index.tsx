import Link from "next/link";
import Image from "next/image";

import type { ProductProps } from "../product.props";
import { sanitizeShopifyId } from "@/utils";

const SearchedProduct: React.FC<ProductProps> = ({ product }) => {
    const coverImage = product?.images?.[0];

    if (!product?.id) {
        return null;
    }

    const sanitizedProductId = sanitizeShopifyId(product?.id);

    return (
        <a href={`/product/${sanitizedProductId}`} className="hover:underline">
            <div className="p-10">
                <Image
                    src={coverImage?.url}
                    alt={coverImage?.altText || ""}
                    width={350 * 2}
                    height={350 * 2}
                />

                <p className="text-gray-600 text-sm mt-2 capitalize">
                    {product?.tags[0]}
                </p>

                <div className="flex justify-between mt-1">
                    <p className="font-bold text-gray-700">{product?.title}</p>
                </div>
            </div>
        </a>
    );
};

export default SearchedProduct;
