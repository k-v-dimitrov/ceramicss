import { type Story } from "@storybook/react";

import Footer from "./footer";
import FooterProps from "./footer.props";

export default {
    title: "components/Footer",
    component: Footer,
};

const Template: Story<FooterProps> = (props) => <Footer {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
