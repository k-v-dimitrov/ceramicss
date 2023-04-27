import { type FC } from "react";

import BubbleIconProps from "./bubble-icon.props";

const iconClasses: Record<BubbleIconProps["type"], string> = {
    tel: "icon-phone",
    facebook: "icon-facebook",
    instagram: "icon-instagram",
    mail: "icon-mail",
};

const BubbleIcon: FC<BubbleIconProps> = ({ type }) => (
    <div className="rounded-full bg-primary-500 h-8 w-8 flex justify-center items-center text-white text-sm">
        <i className={iconClasses[type]} />
    </div>
);

export default BubbleIcon;
