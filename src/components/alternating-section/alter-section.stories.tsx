import { type Story } from "@storybook/react";

import AlterSection from "./alter-section";
import AlternatingSectionProps from "./alter-section.props";

export default {
    title: "components/Alternating Section",
    component: AlterSection,
};

const Template: Story<AlternatingSectionProps> = (props) => (
    <AlterSection {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};
