import { type SVGProps } from "react";

function Burger(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 37" {...props}>
            <path
                stroke="#006AAC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="5.5"
                d="M39 3H3m36 15.5H3m15.8 15.6H3"
            />
        </svg>
    );
}

export default Burger;
