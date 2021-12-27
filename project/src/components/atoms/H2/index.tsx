import { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iH2Props {
  children: ReactNode;
}

export function H2(props: iH2Props) {
  const { children } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <h2 className={`${style.titleTwo} ${darkMode ? style.dark : ""}`}>
      {children}
    </h2>
  );
}
