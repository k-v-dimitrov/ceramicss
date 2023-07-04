import { CartGenqlSelection } from "@/storefront/generated";

import cartLineFragment from "./cart-line.fragment";

const cartFragment = {
    id: true,
    checkoutUrl: true,
    cost: {
        subtotalAmount: {
            amount: true,
            currencyCode: true,
        },
    },
    lines: {
        __args: {
            first: 100,
        },
        nodes: cartLineFragment,
    },
} satisfies CartGenqlSelection;

export default cartFragment;
