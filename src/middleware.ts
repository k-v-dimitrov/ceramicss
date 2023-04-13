import { type NextRequest, NextResponse } from "next/server";

import { Storefront } from "@/services";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    if (!req.cookies.get("cart")) {
        try {
            const result = await Storefront.cart.create();

            if (result) {
                res.cookies.set("cart", result?.id, {
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                });
            }
        } catch (error) {}
    }

    return res;
}
