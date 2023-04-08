import { TransformedCollectionIds } from "@/services";

interface CollectionsMenuProps {
    collectionIdentifiers: TransformedCollectionIds;
    currentCollection: TransformedCollectionIds[number];
}

export default CollectionsMenuProps;
