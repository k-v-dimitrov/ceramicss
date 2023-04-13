import { type FC } from "react";
import Link from "next/link";
import classNames from "classnames";

import type CollectionsMenuProps from "./collections-menu.props";

import COLLECTION_PICTOGRAM from "./collections-menu.constants";
import { sanitizeShopifyId } from "@/utils";

const CollectionsMenu: FC<CollectionsMenuProps> = ({
    allCollections,
    currentCollection,
}) => {
    return (
        <ul className="bg-gray-200 border-gray-200 rounded-xl p-4 border-8 max-w-fit h-fit">
            <h1 className="text-lg text-primary-500 font-bold mb-2">
                Продукти
            </h1>

            {allCollections.map(({ id, title }) => {
                const isSelected =
                    sanitizeShopifyId(currentCollection.id) === id;

                return (
                    <li
                        key={id}
                        className={classNames({
                            "p-4": true,
                            "text-primary-500": isSelected,
                            "text-gray-600": !isSelected,
                        })}
                    >
                        <Link href={`/products/${id}`}>
                            <div className="grid grid-cols-[40px_1fr]">
                                <span
                                    className={classNames({
                                        "text-primary-500": isSelected,
                                        "text-gray-600": !isSelected,
                                    })}
                                >
                                    <i
                                        className={getCollectionPictogram(
                                            title
                                        )}
                                    />
                                </span>
                                <p className="mr-3">{title}</p>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

const getCollectionPictogram = (title: string) => {
    return Object.entries(COLLECTION_PICTOGRAM).find(
        ([key]) => key === title.toLowerCase()
    )?.[1];
};

export default CollectionsMenu;
