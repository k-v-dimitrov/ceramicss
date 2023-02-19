import { type Story } from "@storybook/react";

import CartButton from "./cart-button";
import type CartButtonProps from "./cart-button.props";

export default {
  title: "components/Header",
  component: CartButton,
};

const Template: Story<CartButtonProps> = (props) => <CartButton {...props} />;

export const Primary = Template.bind({});
