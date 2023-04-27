import DetailedProduct from "./detailed";
import GridProduct from "./grid-item";
import ListProduct from "./list-item";
import SearchedProduct from "./search-item";

const Product = {
    ListItem: ListProduct,
    GridItem: GridProduct,
    Detailed: DetailedProduct,
    Searched: SearchedProduct,
};

export { Product };
