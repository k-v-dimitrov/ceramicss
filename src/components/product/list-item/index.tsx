import { useEffect, useState } from "react";
import Image from "next/image";

import { QuantityPicker } from "@/components";

import { ProductProps } from "../product.props";
import { ListItemProps } from "./list-item.props";

const ListProduct: React.FC<ProductProps & ListItemProps> = ({
    line,
    selectedQuantity,
    onQuantityUpdate,
    calculatedPrice,
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

        fetch("/api/cart/lines/remove", {
            method: "POST",
            body: JSON.stringify({ lineId: line.id }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => alert("Success"))
            .catch(() => alert("Fail"));
    };

    return (
        <div className="flex flex-row my-10">
            <span className="mr-4">
                <Image
                    src={line.product.image}
                    alt=""
                    width={240}
                    height={240}
                />
            </span>

            <div className="flex-col justify-between w-full">
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

                <p className="my-6 w-3/4">{line.product?.description}</p>

                <div className="flex items-center gap-4">
                    <p className="text-gray-700 font-bold min-w-[96px]">
                        {calculatedPrice} {line.price.currencyCode}
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
