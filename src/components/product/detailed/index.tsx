import { useState } from "react";

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

    const handleAddToCart = async () => {
        await onAddToCart(product.variantId, selectedQty);
        setIsAddedToCart(true);
    };

    if (initiallyAddedToCart === null) {
        return null;
    }

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

                    {!(initiallyAddedToCart || addedToCart) ? (
                        <Button onClick={handleAddToCart}>
                            Добави в количка
                        </Button>
                    ) : (
                        <Button onClick={handleAddToCart}>Dobaveno</Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DetailedProduct;
