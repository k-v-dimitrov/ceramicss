import { CartLineGenqlSelection } from "@/storefront/generated";

const cartLineFragment = {
    id: true,
    quantity: true,
    cost: {
        amountPerQuantity: {
            amount: true,
            currencyCode: true,
        },
    },
    merchandise: {
        on_ProductVariant: {
            quantityAvailable: true,
            product: {
                id: true,
                title: true,
                description: true,
                productType: true,
                images: {
                    __args: {
                        first: 1,
                    },
                    nodes: {
                        url: true,
                        height: true,
                        width: true,
                        altText: true,
                    },
                },
            },
        },
    },
} satisfies CartLineGenqlSelection;

export default cartLineFragment;
