import SearchDesktop from "./s-desktop";
import SearchMobileToggler from "./s-mobile";
import { SearchMobile } from "./s-mobile";

const Search = {
    Desktop: SearchDesktop,
    Mobile: {
        Toggler: SearchMobileToggler,
        Search: SearchMobile,
    },
};

export { Search };
