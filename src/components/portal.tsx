import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const PORTAL_ROOT = "portal";

function Portal({ children }: PropsWithChildren) {
    const mountElement = document.getElementById(PORTAL_ROOT);

    if (!mountElement) {
        throw new Error("Mount element not found");
    }

    return createPortal(<div>{children}</div>, mountElement);
}

export default Portal;
