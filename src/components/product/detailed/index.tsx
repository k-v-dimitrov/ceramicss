import { useState } from "react";

import { QuantityPicker, Button, ImageRotator } from "@/components";

import { ProductProps } from "../product.props";
import { DetailedProductProps } from "./detailed.props";

const DetailedProduct: React.FC<ProductProps & DetailedProductProps> = ({
    product,
    onAddToCart,
}) => {
    const [selectedQty, setSelectedQty] = useState(1);
    const [spotlightedImage, setSpotlightedImage] = useState(
        product?.images?.[0]
    );

    return (
        <section className="grid grid-cols-2">
            <div>
                <ImageRotator
                    spotlightImage={spotlightedImage}
                    images={product?.images}
                    setSpotlightImage={setSpotlightedImage}
                />
            </div>

            <div className="pt-16">
                <p className="text-lg mb-2 font-light">{product?.tags[0]}</p>
                <p className="text-3xl mb-6 text-primary-500">
                    {product?.title}
                </p>
                <p className="text-2xl mb-6 text-gray-700">
                    {product?.price.amount} {product?.price.currencyCode}
                </p>
                <p className="w-3/4">{product?.description}</p>

                {/* Quantity, Add to cart button */}
                <div className="flex mt-10 gap-4">
                    <QuantityPicker
                        currQuantity={selectedQty}
                        setQuantity={setSelectedQty}
                    />

                    <Button onClick={onAddToCart}>Добави в количка</Button>
                </div>
            </div>
        </section>
    );
};

export default DetailedProduct;
