import Link from "next/link";

import { Cart } from "@/components/vectors";
import { useCartQuery } from "@/storefront/hooks";

function CartButton() {
    const { data } = useCartQuery();

    return (
        <Link
            href="/cart"
            className="bg-primary-500 rounded-full h-[48px] w-[48px]  flex justify-center items-center relative"
        >
            {data?.lines.length! > 0 && (
                <span className="bg-[#fe002f] absolute -top-1.5 -right-1.5 rounded-full h-6 w-6 text-white text-center leading-[26px] text-sm">
                    {data?.lines.length}
                </span>
            )}

            <Cart className="h-6 fill-primary" />
        </Link>
    );
}

export default CartButton;
