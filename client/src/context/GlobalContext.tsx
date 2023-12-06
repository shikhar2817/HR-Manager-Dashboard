import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {}
export const GlobalContext = createContext<ContextProps>({});
export const useGlobalContext = () => useContext(GlobalContext);
