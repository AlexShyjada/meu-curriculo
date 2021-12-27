import { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iRepositoryDescriptionProps {
  children: ReactNode;
}

export function RepositoryDescription(props: iRepositoryDescriptionProps) {
  const { children } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return <span className={`${style.repositoryDescription} ${darkMode ? style.dark : ""}`}>{children}</span>;
}
