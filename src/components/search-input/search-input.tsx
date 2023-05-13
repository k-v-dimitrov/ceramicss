import { ChangeEvent, FC, useState, type FormEvent } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

import SearchInputProps from "./search-input.props";

const SearchInput: FC<SearchInputProps> = ({ onSubmit, className }) => {
    const router = useRouter();
    const query = router.query.searchQuery as string | undefined;
    const [value, setValue] = useState(query || "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (onSubmit) {
            onSubmit();
        }

        router.push(`/search/${value}`);
    };

    return (
        <form
            className={classNames(
                "focus-within:shadow-outline bg-[#EAEAEA] rounded-full justify-center items-center px-4 transition flex min-h-[48px]",
                className
            )}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Какво търсите?"
                className="focus:outline-none bg-unset placeholder:text-[#A0A0A0] text-black w-full lg:text-sm"
                value={value}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="icon-search text-primary-500 text-lg ml-3"
            />
        </form>
    );
};

export default SearchInput;
