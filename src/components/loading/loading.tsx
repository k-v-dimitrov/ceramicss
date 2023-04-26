import { type FC } from "react";

import ReactLoading from "react-loading";

const Loading: FC = () => {
    return (
        <div className="h-[600px] flex items-center justify-center">
            <ReactLoading type="spin" color={"#006AAC"} width={"100px"} />{" "}
        </div>
    );
};

export default Loading;
