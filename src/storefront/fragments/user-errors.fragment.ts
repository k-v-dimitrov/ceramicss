import { CartUserErrorGenqlSelection } from "@/storefront/generated";

const userErrorsFragment = {
    message: true,
    code: true,
    field: true,
} satisfies CartUserErrorGenqlSelection;

export default userErrorsFragment;
