import { Storefront } from "@/services";
import { rebuildShopifyProductId } from "@/utils";
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
        const result = await Storefront.products.get(rebuildShopifyProductId(req.body.id));
        return res.status(200).json({ success: true, data: result.isAvailableForSale });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}
