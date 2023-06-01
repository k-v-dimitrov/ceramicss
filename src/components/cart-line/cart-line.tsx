import { Fragment } from "react";
import Image from "next/image";

import { Close as CloseIcon } from "@/components/vectors";
import { type Line } from "@/libs/genql/cart.model";
import useRemoveLineFromCart from "@/hooks/useRemoveLineFromCart";

interface Props {
    line: Line;
}

function CartLine({ line }: Props) {
    const { mutate } = useRemoveLineFromCart();

    return (
        <Fragment key={line.id}>
            <div className="flex gap-2" key={Math.random()}>
                <Image
                    src={line.product.thumbnail.url}
                    alt={line.product.thumbnail.alt || ""}
                    height={480}
                    width={480}
                    quality={40}
                    className="w-1/4 rounded-md brightness-95"
                />

                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                        <div>
                            {/* <Link href={`/product/${line.product.id}`}> */}
                            <legend className="text-[#6A6A6A] text-sm capitalize">
                                {line.product.type}
                            </legend>
                            <p className="text-primary-500 text-lg">
                                {line.product.title}
                            </p>
                            {/* </Link> */}
                        </div>
                        <button
                            className="p-3 translate-x-2 -translate-y-2 self-start"
                            onClick={() => mutate(line.id)}
                        >
                            <CloseIcon className="h-3" />
                        </button>
                    </div>

                    <div>
                        <p className="text-[#6A6A6A] leading-none inline">
                            {`${line.cost.amount} ${line.cost.currencyCode}`}
                        </p>
                        <div className="self-end ml-8 inline">
                            <button className="text-sm text-white bg-primary-500 h-5 w-5 rounded-full leading-none">
                                -
                            </button>
                            <span className="mx-4">{line.quantity}</span>
                            <button className="text-sm text-white bg-primary-500 h-5 w-5 rounded-full leading-none">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-3 border-gray-200" />
        </Fragment>
    );
}

export default CartLine;
