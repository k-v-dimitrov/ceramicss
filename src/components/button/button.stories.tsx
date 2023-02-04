import { type Story } from "@storybook/react";

import Button from "./button";
import ButtonProps from "./button.props";

export default {
  title: "components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  size: "h-10 w-56",
  children: "Primary",
};
