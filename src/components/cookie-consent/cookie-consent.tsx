import { type FC } from "react";
import Modal from "react-modal";

import { Button } from "@/components";

import { CookieConsentProps } from "./cookie-consent.props";

const CookieConsent: FC<CookieConsentProps> = ({ onAcceptCookies }) => {
    return (
        <Modal
            isOpen
            className="outline-none"
            overlayClassName={`fixed bottom-[0px] w-full h-fit bg-primary-500 `}
            ariaHideApp={false}
        >
            <div className="lg:flex text-white text-lg m-10">
                <p className="lg:w-3/4">
                    Чрез използването на този уеб сайт вие се съгласявате с
                    използването на cookies (т.нар. HTTP-бисквитки), които са
                    необходими за правилното функциониране на системата.
                </p>

                <Button
                    className="bg-white text-gray-800 font-bold text-sm mt-4 lg:mt-0 lg:w-1/4"
                    onClick={onAcceptCookies}
                >
                    Да, съгласявам се
                </Button>
            </div>
        </Modal>
    );
};

export default CookieConsent;
