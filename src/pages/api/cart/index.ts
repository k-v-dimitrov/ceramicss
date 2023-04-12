import { Storefront } from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await Storefront.cart.get(req.cookies.cart!);

    return res.status(200).json(result);
}
