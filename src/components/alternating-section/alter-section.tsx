import { useCallback, type FC } from "react";
import Image from "next/image";
import cx from "classnames";

import AlternatingSectionProps from "./alter-section.props";

const AlterSection: FC<AlternatingSectionProps> = ({
    title,
    paragraph,
    SectionImage,
    flip,
}) => {
    return (
        <section
            className={cx(
                "py-32 px-12 lg:px-40 flex flex-col justify-center items-center lg:justify-between",
                { "bg-[#EAEAEA]": flip },
                { "lg:flex-row-reverse": flip },
                { "lg:flex-row": !flip }
            )}
        >
            <div
                className={cx("lg:w-4/5 flex flex-col", {
                    "lg:items-end": flip,
                })}
            >
                <h1
                    className={cx(
                        "text-4xl lg:text-5xl text-primary-500 font-semibold mb-4 lg:mb-8",
                        { "lg:w-3/4": flip }
                    )}
                >
                    {title}
                </h1>
                <p className={cx("lg:text-xl mb-4", { "lg:w-3/4": true })}>
                    {paragraph}
                </p>
            </div>

            <div className="lg:px-10">{SectionImage}</div>
        </section>
    );
};

export default AlterSection;
