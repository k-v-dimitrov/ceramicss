import { type NextRequest, NextResponse } from "next/server";

import { Storefront } from "@/services";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const cartId = req.cookies.get("cart");

    if (!cartId) {
        try {
            const result = await Storefront.cart.create();

            if (result) {
                res.cookies.set("cart", result?.id, {
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                });
            }
        } catch (error) {
            throw new Error("Not yet implemented.");
        }
    } else {
        const cart = await Storefront.cart.get(cartId.value);

        if (!cart) {
            try {
                const result = await Storefront.cart.create();

                if (result) {
                    res.cookies.set("cart", result?.id, {
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                    });
                }
            } catch (error) {
                throw new Error("Not yet implemented.");
            }
        }
    }

    return res;
}
