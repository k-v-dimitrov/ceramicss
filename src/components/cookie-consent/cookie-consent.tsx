import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function CookieConsent() {
    const [hasConsent, setHasConsent] = useState(true);

    useEffect(() => {
        setHasConsent(!!Cookies.get("cookie_consent"));
    }, []);

    if (hasConsent) {
        return null;
    }

    const handleSubmit = () => {
        Cookies.set("cookie_consent", "1");
        setHasConsent(true);
    };

    return (
        <div className="bg-primary-500 text-white fixed left-3 bottom-3 right-3 rounded-lg p-4 z-50">
            <p className="mb-4">
                Чрез използването на този уеб сайт вие се съгласявате с
                използването на cookies (т.нар. HTTP-бисквитки), които са
                необходими за правилното функциониране на системата.
            </p>

            <button
                onClick={handleSubmit}
                className="bg-white text-primary-500 rounded-lg py-2 px-4 font-bold w-full"
            >
                Разбирам
            </button>
        </div>
    );
}

export default CookieConsent;
