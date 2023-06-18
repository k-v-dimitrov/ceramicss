import { Magnifier as MagnifierIcon } from "@/components/vectors";
import { useRouter } from "next/router";
import { type FormEvent } from "react";

function SearchInput() {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // @ts-expect-error
        const query = e?.target.query.value;

        router.push(`/search/${query}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#EAEAEA] rounded-full overflow-hidden hidden lg:flex h-12 items-center px-5 gap-4 text-sm"
        >
            <input
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
