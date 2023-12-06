import { ReactNode, useState } from "react";
import { GlobalContext } from "./GlobalContext";

interface Props {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
