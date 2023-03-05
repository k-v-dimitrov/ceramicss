import { gql } from "@apollo/client";

const query = gql`
    query getCollections {
        collections(first: 10) {
            nodes {
                title
                image {
                    url
                }
            }
        }
    }
`;

export const transform = (data: any) =>
    data.collections.nodes.map((node: any) => ({
        title: node.title,
        imageUrl: node.image.url,
    })) as Array<{ title: string; imageUrl: string }>;

const GET_COLLECTIONS = { query, transform };

export default GET_COLLECTIONS;
