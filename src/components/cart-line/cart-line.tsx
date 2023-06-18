import clsx from "clsx";
import Image from "next/image";

import { type Line } from "@/storefront/cart.model";
import { Close as CloseIcon } from "@/components/vectors";
import useUpdateCartLine from "@/hooks/useUpdateCartLine";
import useRemoveLineFromCart from "@/hooks/useRemoveLineFromCart";
import Link from "next/link";

interface Props {
    line: Line;
}

function CartLine({ line }: Props) {
    const { mutate: updateLine, isLoading: isUpdateLoading } =
        useUpdateCartLine();
    const { mutate: removeLine, isLoading: isRemoveLoading } =
        useRemoveLineFromCart();

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
        <>
            <div
                className={clsx(
                    "flex gap-2 relative",
                    isLoading &&
                        "after:absolute after:w-full after:h-full after:opacity-70 after:bg-white after:animate-pulse"
                )}
                key={Math.random()}
            >
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
                        <Link href={`/product/${line.product.id.split("/").at(-1)}`}>
                            <legend className="text-[#6A6A6A] text-sm capitalize">
                                {line.product.type}
                            </legend>
                            <p className="text-primary-500 text-lg">
                                {line.product.title}
                            </p>
                        </Link>
                        <button
                            className="p-3 translate-x-2 -translate-y-2 self-start"
                            onClick={() => removeLine(line.id)}
                        >
                            <CloseIcon className="h-3" />
                        </button>
                    </div>

                    <div>
                        <p className="text-[#6A6A6A] leading-none inline">
                            {`${line.cost.amount.toFixed(2)} ${
                                line.cost.currencyCode
                            }`}
                        </p>
                        <div className="self-end ml-8 inline">
                            <button
                                className="text-sm text-white bg-primary-500 h-5 w-5 rounded-full leading-none"
                                onClick={handleQuantityDecrement}
                            >
                                -
                            </button>
                            <span className="mx-4">{line.quantity}</span>
                            <button
                                className="text-sm text-white bg-primary-500 h-5 w-5 rounded-full leading-none"
                                onClick={handleQuantityIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-3 border-gray-200" />
        </>
    );
}

export default CartLine;
