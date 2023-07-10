import { type SVGProps } from "react";

function Close(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" {...props}>
            <path d="M9.85 9.14a.5.5 0 0 1 0 .72.51.51 0 0 1-.7 0L5 5.69.86 9.86a.51.51 0 0 1-.71 0 .5.5 0 0 1 0-.72L4.29 5 .15.83A.5.5 0 0 1 .5 0a.5.5 0 0 1 .35.12L5 4.28 9.14.12a.5.5 0 0 1 .83.36.5.5 0 0 1-.12.35L5.71 4.99l4.14 4.15Z" />
        </svg>
    );
}

export default Close;
