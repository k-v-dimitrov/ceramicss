import Image from "next/image";

function Page() {
    return (
        <div className="flex flex-col gap-8">
            <section>
                <h1 className="text-primary-500 text-2xl font-bold mb-1">
                    Lorem Ipsum
                </h1>
                <p className="mb-2 text-[#6A6A6A]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    debitis exercitationem ipsa velit neque provident vero.
                </p>
                <Image
                    src="/imgs/blank.png"
                    height={732 * 2}
                    width={732 * 2}
                    alt="test"
                    className="rounded-lg"
                />
            </section>

            <section>
                <h1 className="text-primary-500 text-2xl font-bold mb-1">
                    Lorem Ipsum
                </h1>
                <p className="mb-2 text-[#6A6A6A]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    debitis exercitationem ipsa velit neque provident vero.
                </p>
                <Image
                    src="/imgs/blank.png"
                    height={732 * 2}
                    width={732 * 2}
                    alt="test"
                    className="rounded-lg"
                />
            </section>

            <section>
                <h1 className="text-primary-500 text-2xl font-bold mb-1">
                    Lorem Ipsum
                </h1>
                <p className="mb-2 text-[#6A6A6A]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    debitis exercitationem ipsa velit neque provident vero.
                </p>
                <Image
                    src="/imgs/blank.png"
                    height={732 * 2}
                    width={732 * 2}
                    alt="test"
                    className="rounded-lg"
                />
            </section>
        </div>
    );
}

export default Page;
