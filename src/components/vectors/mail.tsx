import { type SVGProps } from "react";

function Mail(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            viewBox="0 0 23 19"
            {...props}
        >
            <path d="M20.73.87H2.43c-.8 0-1.45.65-1.45 1.45v14.52c0 .8.65 1.46 1.45 1.46h15.92c.32 0 .58-.27.58-.59a.58.58 0 0 0-.58-.58H2.43a.3.3 0 0 1-.29-.29V2.32a.3.3 0 0 1 .29-.29h17.6l-8.32 8.42L5.1 4.06a.58.58 0 0 0-.82.01.6.6 0 0 0 .01.82l7.02 6.8c.11.1.26.15.4.15.15 0 .31-.05.42-.17l8.89-9v11.36a.58.58 0 0 0 1.16 0V2.33c0-.8-.65-1.46-1.45-1.46Z" />
        </svg>
    );
}

export default Mail;
