import { useEffect, useState } from "react";

import { formatPrice } from "@/utils";
import { QuantityPicker, Button, ImageRotator } from "@/components";

import { ProductProps } from "../product.props";
import { DetailedProductProps } from "./detailed.props";

const DetailedProduct: React.FC<ProductProps & DetailedProductProps> = ({
    product,
    onAddToCart,
    initiallyAddedToCart,
}) => {
    const [selectedQty, setSelectedQty] = useState(1);
    const [spotlightedImage, setSpotlightedImage] = useState(
        product?.images?.[0]
    );

    const [addedToCart, setIsAddedToCart] = useState(false);
    const [inStock, setInStock] = useState<boolean | null>(null);

    const handleAddToCart = async () => {
        await onAddToCart(product.variantId, selectedQty);
        setIsAddedToCart(true);
    };

    useEffect(() => {
        fetch("/api/product/check-availability", {
            method: "POST",
            body: JSON.stringify({ id: product.id }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ data }) => setInStock(data));
    }, [product.id]);

    if (initiallyAddedToCart === null) {
        return null;
    }

    return (
        <section className="flex flex-col lg:grid lg:grid-cols-2">
            <div>
                <ImageRotator
                    spotlightImage={spotlightedImage}
                    images={product?.images}
                    setSpotlightImage={setSpotlightedImage}
                />
            </div>

            <div className="px-6 py-8 lg:pt-16">
                <p className="text-lg mb-2 font-light capitalize">
                    {product?.tags[0]}
                </p>
                <p className="text-3xl mb-6 text-primary-500">
                    {product?.title}
                </p>
                <p className="text-2xl mb-6 text-gray-700">
                    {formatPrice(product?.price.amount)}{" "}
                    {product?.price.currencyCode}
                </p>
                <p className="w-3/4">{product?.description}</p>

                {!inStock && (
                    <div className="flex flex-col lg:flex-row mt-10 gap-4">
                        <Button className="bg-gray-600 cursor-default" disabled>
                            Изчерпано Количество
                        </Button>
                    </div>
                )}

                {inStock && (
                    <div className="flex flex-col lg:flex-row mt-10 gap-4">
                        {!(initiallyAddedToCart || addedToCart) ? (
                            <>
                                <QuantityPicker
                                    currQuantity={selectedQty}
                                    setQuantity={setSelectedQty}
                                />
                                <Button onClick={handleAddToCart}>
                                    Добави в количка
                                </Button>
                            </>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <p className="text-primary-500 text-lg">
                                    Добавено в количката!
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DetailedProduct;
