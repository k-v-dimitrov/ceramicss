require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { generate } = require("@genql/cli");

const outputPath = path.join(__dirname, "..", "src/storefront");
const generatedOutputPath = path.join(outputPath, "generated");
const generatedClientPath = path.join(outputPath, "client.ts");

const clientTemplate = `import { createClient } from "./generated";

const client = createClient({
    url: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
        "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
});

export default client;
`;

function generateClient() {
    fs.writeFile(generatedClientPath, clientTemplate, console.error);
}

generate({
    endpoint: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
        "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    output: generatedOutputPath,
})
    .then(generateClient)
    .catch(console.error);
