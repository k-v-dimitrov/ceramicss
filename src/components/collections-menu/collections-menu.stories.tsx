import { type Story } from "@storybook/react";

import CollectionsMenuProps from "./collections-menu";
import type CollectionsMenuProps from "./collections-menu.props";

export default {
    title: "components/CollectionsMenu",
    component: CollectionsMenu,
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};

const Template: Story<CollectionsMenuProps> = (props) => (
    <CollectionsMenu {...props} />
);

export const Primary = Template.bind({});
