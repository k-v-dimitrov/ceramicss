import {
    type FieldsSelection,
    type CartLineInput,
    type Cart as GenqlCart,
    type CartLineUpdateInput,
    type CartLine as GenqlCartLine,
} from "@/storefront/generated";
import client from "@/storefront/generated/client";
import {
    cartFragment,
    cartLineFragment,
    userErrorsFragment,
} from "./fragments";

function transformCartLine(
    line: FieldsSelection<GenqlCartLine, typeof cartLineFragment>
) {
    return {
        id: line.id,
        quantity: line.quantity,
        cost: {
            amount: line.cost.amountPerQuantity.amount * line.quantity,
            currencyCode: line.cost.amountPerQuantity.currencyCode,
        },
        quantityAvailable: line.merchandise.quantityAvailable,
        product: {
            id: line.merchandise.product.id,
            title: line.merchandise.product.title,
            type: line.merchandise.product.productType,
            thumbnail: {
                url: line.merchandise.product.images.nodes[0].url,
                alt: line.merchandise.product.images.nodes[0].altText,
            },
        },
    };
}

export type Line = ReturnType<typeof transformCartLine>;

function transformCart(cart: FieldsSelection<GenqlCart, typeof cartFragment>) {
    return {
        id: cart?.id,
        url: cart?.checkoutUrl,
        cost: cart.cost.subtotalAmount,
        lines: cart?.lines.nodes.map((line) => transformCartLine(line)),
    };
}

export type Cart = ReturnType<typeof transformCart>;

// actions

export async function fetchCart(cartId: string) {
    const { cart } = await client.query({
        cart: {
            __args: {
                id: cartId,
            },
            ...cartFragment,
        },
    });

    return transformCart(cart!);
}

export async function addLine(cartId: string, line: CartLineInput) {
    const { cartLinesAdd } = await client.mutation({
        cartLinesAdd: {
            __args: {
                cartId,
                lines: [line],
            },
            cart: cartFragment,
            userErrors: userErrorsFragment,
        },
    });

    return {
        cart: transformCart(cartLinesAdd?.cart!),
        userErrors: cartLinesAdd?.userErrors,
    };
}

export async function removeLine(cartId: string, lineId: string) {
    const { cartLinesRemove } = await client.mutation({
        cartLinesRemove: {
            __args: {
                cartId,
                lineIds: [lineId],
            },
            cart: cartFragment,
            userErrors: userErrorsFragment,
        },
    });

    return {
        cart: transformCart(cartLinesRemove?.cart!),
        userErrors: cartLinesRemove?.userErrors,
    };
}

export async function createCartWithLine(line: CartLineInput) {
    const { cartCreate } = await client.mutation({
        cartCreate: {
            __args: {
                input: { lines: [line] },
            },
            cart: cartFragment,
            userErrors: userErrorsFragment,
        },
    });

    return {
        cart: transformCart(cartCreate?.cart!),
        userErrors: cartCreate?.userErrors,
    };
}

export async function updateLine(cartId: string, line: CartLineUpdateInput) {
    const { cartLinesUpdate } = await client.mutation({
        cartLinesUpdate: {
            __args: {
                cartId,
                lines: [line],
            },
            cart: cartFragment,
            userErrors: userErrorsFragment,
        },
    });

    return {
        cart: transformCart(cartLinesUpdate?.cart!),
        userErrors: cartLinesUpdate?.userErrors,
    };
}
