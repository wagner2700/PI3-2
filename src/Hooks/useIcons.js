import { useContext } from "react";

import { IconsContext } from "../Contextos/IconsContextProvider";

function useIcons() {
    const context = useContext(IconsContext)
    return context;
}

export default useIcons;