import { Storefront } from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const result = await Storefront.cart.lineItems.add(
            req.cookies.cart as string,
            [req.body.line]
        );

        if (
            result?.cartLinesAdd?.userErrors &&
            result.cartLinesAdd.userErrors.length > 0
        ) {
            return res.status(501).json({
                success: false,
                error: result.cartLinesAdd.userErrors,
            });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}
