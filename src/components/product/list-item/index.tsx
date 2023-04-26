import { useEffect, useState } from "react";
import Image from "next/image";

import { QuantityPicker } from "@/components";

import { ProductProps } from "../product.props";
import { ListItemProps } from "./list-item.props";

const ListProduct: React.FC<Omit<ProductProps, "product"> & ListItemProps> = ({
    line,
    selectedQuantity,
    onQuantityUpdate,
    onProductRemove,
}) => {
    const [quantity, setQuantity] = useState(selectedQuantity);

    useEffect(() => {
        if (line?.id && onQuantityUpdate) {
            onQuantityUpdate(line.id, quantity);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const onRemoveHandler = () => {
        onProductRemove && line?.id && onProductRemove(line?.id);
    };

    const coverImage = line?.product.image;
    return (
        <div className="flex flex-row my-10 px-6">
            <span className="mr-4">
                <Image
                    src={coverImage?.url}
                    alt={coverImage?.altText || ""}
                    width={240}
                    height={240}
                />
            </span>

            <div className="flex-col justify-around lg:justify-between w-full">
                <p className="text-gray-600 text-sm mb-1">
                    {line.product?.tags[0]}
                </p>

                <p className="flex justify-between align-center text-lg text-primary-500 font-bold">
                    {line.product?.title}

                    <button
                        className="hover:cursor-pointer"
                        onClick={onRemoveHandler}
                    >
                        <span
                            className="icon-remove"
                            style={{
                                lineHeight: "unset",
                            }}
                        />
                    </button>
                </p>

                <p className="hidden lg:block my-6 w-3/4 text-gray-700">
                    {line?.product.description}
                </p>

                <div className="flex items-center mt-4 lg:gap-4">
                    <p className="text-gray-700 font-bold min-w-[96px]">
                        {line.price.amount * quantity}{" "}
                        {line?.price.currencyCode}
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
