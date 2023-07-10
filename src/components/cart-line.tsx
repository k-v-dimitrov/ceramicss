import clsx from "clsx";
import Image from "next/image";

import { type Line } from "@/storefront/cart.model";
import { Close as CloseIcon } from "@/components/vectors";
import useUpdateCartLine from "@/storefront/hooks/useUpdateCartLine";
import useRemoveCartLine from "@/storefront/hooks/useRemoveCartLine";
import Link from "next/link";

interface Props {
    line: Line;
}

function CartLine({ line }: Props) {
    const { mutate: updateLine, isLoading: isUpdateLoading } =
        useUpdateCartLine();
    const { mutate: removeLine, isLoading: isRemoveLoading } =
        useRemoveCartLine();

    const isLoading = isUpdateLoading || isRemoveLoading;

    const handleQuantityIncrement = () => {
        if (line.quantity < line.quantityAvailable!) {
            updateLine({
                id: line.id,
                quantity: line.quantity + 1,
            });
        }
    };

    const handleQuantityDecrement = () => {
        if (line.quantity > 1) {
            updateLine({
                id: line.id,
                quantity: line.quantity - 1,
            });
        }
    };

    return (
        <div
            className={clsx(
                "flex flex-col gap-4 relative",
                isLoading &&
                    "after:absolute after:w-full after:h-full after:opacity-70 after:bg-white after:animate-pulse"
            )}
        >
            <div className="flex gap-2 relative" key={Math.random()}>
                <Image
                    src={line.product.thumbnail.url}
                    alt={line.product.thumbnail.alt || ""}
                    height={480}
                    width={480}
                    quality={40}
                    className="w-[88px] h-[88px] rounded-md brightness-95"
                />

                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                        <Link
                            href={`/product/${line.product.id
                                .split("/")
                                .at(-1)}`}
                        >
                            <legend className="text-[#6A6A6A] text-sm capitalize">
                                {line.product.type}
                            </legend>
                            <p className="text-primary-500 text-lg">
                                {line.product.title}
                            </p>
                        </Link>
                    </div>

                    <div>
                        <p className="text-[#6A6A6A] leading-none inline">
                            {`${line.cost.amount.toFixed(2)} ${
                                line.cost.currencyCode
                            }`}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-2">
                <button
                    className="border-2 border-primary-500 rounded-lg h-10 w-10 flex justify-center items-center"
                    onClick={() => removeLine(line.id)}
                >
                    <CloseIcon className="h-2 fill-primary-500" />
                </button>

                <div className="flex border-2 h-10 border-primary-500 rounded-lg">
                    <button
                        className="text-primary-500 h-full w-10 flex justify-center items-center text-lg"
                        onClick={handleQuantityDecrement}
                    >
                        -
                    </button>

                    <div className="h-full w-10 flex justify-center items-center text-sm text-primary-500">
                        {line.quantity}
                    </div>

                    <button
                        className="text-primary-500 h-full w-10 flex justify-center items-center text-lg"
                        onClick={handleQuantityIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartLine;
