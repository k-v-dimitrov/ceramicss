import { type Story } from "@storybook/react";

import Contacts from "./contacts";
import ContactsProps from "./contacts.props";

export default {
    title: "components/Contacts",
    component: Contacts,
};

const Template: Story<ContactsProps> = (props) => <Contacts {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
