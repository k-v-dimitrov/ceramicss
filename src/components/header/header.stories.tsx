import { type Story } from "@storybook/react";

import Header from "./header";
import type HeaderProps from "./header.props";

export default {
  title: "components/Header",
  component: Header,
};

const Template: Story<HeaderProps> = (props) => <Header {...props} />;

export const Primary = Template.bind({});
