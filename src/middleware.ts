import { type NextRequest, NextResponse } from "next/server";

import { Storefront } from "@/services";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    if (!req.url.includes("/api")) {
        return res;
    }

    const cookie = req.cookies.get("cart");

    if (!cookie) {
        const cart = await Storefront.cart.create();

        const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

        res.cookies.set("cart", cart!.id, { expires });
    } else {
        const isCartValid = await Storefront.cart.getLight(cookie.value);

        if (isCartValid) {
            return res;
        }

        const cart = await Storefront.cart.create();

        const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

        res.cookies.set("cart", cart!.id, { expires });
    }

    return res;
}
