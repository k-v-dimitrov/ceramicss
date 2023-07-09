import { Magnifier as MagnifierIcon } from "@/components/vectors";
import clsx from "clsx";
import { useRouter } from "next/router";
import { type FormEvent } from "react";

interface Props {
    onSubmit?: any;
    variant?: "sm" | "lg";
}

const variants: Record<"sm" | "lg", string> = {
    sm: "h-12 text-sm",
    lg: "h-14 text-base",
};

function SearchInput({ variant = "lg", onSubmit }: Props) {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (onSubmit) {
            onSubmit();
        }

        // @ts-expect-error
        const query = e?.target.query.value;

        router.push(`/search/${query}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={clsx(
                "bg-[#EAEAEA] rounded-full overflow-hidden flex items-center px-5 gap-4",
                variants[variant]
            )}
        >
            <input
                enterKeyHint="search"
                type="text"
                name="query"
                className="bg-unset w-full focus:outline-none placeholder:text-[#A0A0A0] bg-transparent"
                placeholder="Какво търсите?"
            />
            <button>
                <MagnifierIcon className="h-5" />
            </button>
        </form>
    );
}

export default SearchInput;
