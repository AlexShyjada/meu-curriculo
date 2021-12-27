import { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iH1Props {
  children: ReactNode;
}

export function H1(props: iH1Props) {
  const { children } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <h1 className={`${style.titleOne} ${darkMode ? style.dark : ""}`}>
      {children}
    </h1>
  );
}
