import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iContextProviderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
interface iStateAndRequestContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const StateAndRequestContext = createContext(
  {} as iStateAndRequestContext
);

export function StateAndRequestContextProvider(props: iContextProviderProps) {
  const { children, darkMode, setDarkMode } = props;

  return (
    <StateAndRequestContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </StateAndRequestContext.Provider>
  );
}
