# Ceramicss E-commerce
## NextJS project that integrates with Shopify to create an e-commerce website.

### Introduction
Ceramicss is a Next.js ecommerce project integrated with Shopify. It utilizes Shopify's Storefront API to fetch product and checkout data.

### Requirements
- Node.js (v14 or higher)
- yarn

### Getting Started
To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Run yarn install to install the project dependencies.
3. Copy the .env.example file to a new file named .env.
4. Edit the .env file to include your Shopify store URL and storefront access token.

### Generating GraphQL Schema
To generate the GraphQL schema for Shopify's Storefront API:

1. Make sure that you have installed the project dependencies by running yarn install.

2. Run the following command in your terminal replacing `store-name` and `token` with your Shopify store name and Storefront API access token respectively:

    `yarn graphql-js-schema-fetch https://<store-name>.myshopify.com/api/graphql --header "Content-Type: application/json" --header "X-Shopify-Storefront-Access-Token: <token>" > schema.json`

This will create a schema.json file in the root directory of the project containing the Shopify Storefront API schema.

### Running the Project
You can run the project using the following scripts:

- yarn dev: Start the development server for the NextJS app and run the GraphQL codegen in watch mode.
- yarn build: Build the NextJS app for production.
- yarn start: Start the production server for the NextJS app.
- yarn lint: Run the linter to check for code quality issues.
- yarn format: Run Prettier to format the code.
- yarn storybook: Start the Storybook development server.
- yarn build:storybook: Build the Storybook app for production.

### Dependencies
Here are the key dependencies used in this project:
- @apollo/client: A GraphQL client for React that is used to fetch data from Shopify.
- graphql: A library for working with GraphQL queries and mutations.
- next: The NextJS framework for server-side rendering and client-side routing.
- react: The core React library for building user interfaces.
- react-dom: A package that provides DOM-specific methods for React.
- sharp: A library for resizing and optimizing images.
  
### Dev Dependencies
Key dev dependencies used in this project:

- @graphql-codegen/cli: A CLI for generating TypeScript types based on GraphQL queries and mutations.
- @storybook/react: A UI development environment and playground for React components.
- eslint: A linter for identifying and reporting on patterns found in JavaScript code.
- prettier: A tool for enforcing consistent code formatting.

### Disclaimer
The project includes Storybook, but it is not currently used.