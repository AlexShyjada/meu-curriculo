import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";

import { iContextProviderProps, iStateAndRequestContext, RootObject } from "./StateAndRequestContentInterfaces"

export const StateAndRequestContext = createContext(
  {} as iStateAndRequestContext
);

export function StateAndRequestContextProvider(props: iContextProviderProps) {
  const { children, darkMode, setDarkMode } = props;

  const [githubRepositorys, setGithubRepositorys] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AlexShyjada/repos")
    .then((response) => response.json())
    .then(data => setGithubRepositorys(data))
  }, []);

  console.log(githubRepositorys)

  return (
    <StateAndRequestContext.Provider value={{ darkMode, setDarkMode, githubRepositorys }}>
      {children}
    </StateAndRequestContext.Provider>
  );
}
