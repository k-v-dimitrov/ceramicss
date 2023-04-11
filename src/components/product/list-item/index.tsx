import { useEffect, useState } from "react";
import Image from "next/image";

import { QuantityPicker } from "@/components";

import { ProductProps } from "../product.props";
import { ListItemProps } from "./list-item.props";

const ListProduct: React.FC<ProductProps & ListItemProps> = ({
    product,
    selectedQuantity,
    onQuantityUpdate,
    calculatedPrice,
}) => {
    const [quantity, setQuantity] = useState(selectedQuantity);

    useEffect(() => {
        if (product?.id && onQuantityUpdate) {
            onQuantityUpdate(product.id, quantity);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const coverImage = product?.images[0];
    return (
        <div className="flex flex-row my-10">
            <span className="mr-4">
                <Image
                    src={coverImage?.url}
                    alt={coverImage?.altText || ""}
                    width={240}
                    height={240}
                />
            </span>

            <div className="flex-col justify-between w-full">
                <p className="text-gray-600 text-sm mb-1">{product?.tag}</p>

                <p className="flex justify-between align-center text-lg text-primary-500 font-bold">
                    {product?.title}

                    <button className="hover:cursor-pointer">
                        <span
                            className="icon-remove"
                            style={{
                                lineHeight: "unset",
                            }}
                        />
                    </button>
                </p>

                <p className="my-6 w-3/4">{product?.description}</p>

                <div className="flex items-center gap-4">
                    <p className="text-gray-700 font-bold min-w-[96px]">
                        {calculatedPrice} {product?.variants.currencyCode}
                    </p>

                    <div className="min-w-[64px]">
                        <QuantityPicker
                            currQuantity={quantity}
                            setQuantity={setQuantity}
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
