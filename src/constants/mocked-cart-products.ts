import { ProductType } from "@/services";
import { CurrencyCode } from "@/types/graphql";

export const getMockedCartProducts = (): ProductType[] => [
    {
        id: "gid://shopify/Product/8122847396121",
        title: 'Игла "Лорем 3"',
        description: "",
        images: [
            {
                altText: null,
                height: 350,
                width: 350,
                id: "gid://shopify/ProductImage/40620582600985",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_172_1.png?v=1676720848",
            },
        ],
        price: {
            amount: "0.0",
            currencyCode: CurrencyCode.Bgn,
        },
        isAvailableForSale: true,
        variantId: "123",
        tags: ["ИГЛА"],
    },
    {
        id: "gid://shopify/Product/8122845135129",
        title: 'Колие "Лорем"',
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque sem ut est tempor bibendum. Etiam auctor sem metus, ultrices rutrum lacus blandit a. Sed egestas egestas diam, finibus fringilla neque faucibus ut. Quisque tempus augue turpis, ut cursus risus dictum sit amet.",
        images: [
            {
                altText: null,
                height: 350,
                width: 350,
                id: "gid://shopify/ProductImage/40620572213529",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_111_2.png?v=1676720734",
            },
        ],
        price: {
            amount: "0.0",
            currencyCode: CurrencyCode.Bgn,
        },
        isAvailableForSale: true,
        variantId: "123",
        tags: ["КОЛИЕ"],
    },
    {
        id: "gid://shopify/Product/8122817970457",
        title: "Чаша “Зелени листа”",
        description:
            "Описание:Подходяща за ежедневна употреба. Съвместима микровълнови печки и съдомиалниМатерил:червена глина;подглазурна декорация;безоловна глазура.",
        images: [
            {
                altText: null,
                height: 350,
                width: 350,
                id: "gid://shopify/ProductImage/40620528697625",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_21_1.png?v=1676720294",
            },
            {
                altText: null,
                height: 170,
                width: 170,
                id: "gid://shopify/ProductImage/40620359352601",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_18_21.png?v=1676720294",
            },
            {
                altText: null,
                height: 170,
                width: 170,
                id: "gid://shopify/ProductImage/40620359450905",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_18_31.png?v=1676720294",
            },
            {
                altText: null,
                height: 170,
                width: 170,
                id: "gid://shopify/ProductImage/40620359418137",
                url: "https://cdn.shopify.com/s/files/1/0723/0134/7097/products/Ceramicss_FB_Post_1_181.png?v=1676720294",
            },
        ],
        isAvailableForSale: true,
        price: {
            amount: "25.0",
            currencyCode: CurrencyCode.Bgn,
        },
        tags: ["ЧАША"],
        variantId: "123",
    },
];
