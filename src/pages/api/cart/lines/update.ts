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
        const result = await Storefront.cart.lineItems.update(
            req.cookies.cart!,
            {
                id: req.body.line.id,
                quantity: req.body.line.quantity,
            }
        );

        if (
            result?.cartLinesUpdate?.userErrors &&
            result.cartLinesUpdate.userErrors.length > 0
        ) {
            return res.status(501).json({
                success: false,
                error: result.cartLinesUpdate.userErrors,
            });
        }

        return res.status(200).json({
            success: true,
            errors: result?.cartLinesUpdate?.userErrors,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}
