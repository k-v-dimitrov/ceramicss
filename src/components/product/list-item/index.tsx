import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../product.props";

const ListProduct: React.FC<ProductProps> = ({ product }) => {
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

                <p className="text-gray-700 font-bold">
                    {product?.variants.amount}
                    {product?.variants.currencyCode}
                </p>
            </div>
        </div>
    );
};

export default ListProduct;
