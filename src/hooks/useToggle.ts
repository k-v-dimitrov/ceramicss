import { useState } from "react";

function useToggle(initialState = false): [boolean, () => void] {
    const [state, setState] = useState(initialState);

    const toggleState = () => setState(!state);

    return [state, toggleState];
}

export default useToggle;
