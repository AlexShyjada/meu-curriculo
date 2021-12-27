import { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iH3Props {
  children: ReactNode;
}

export function H3(props: iH3Props) {
  const { children } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <h3 className={`${style.titleThree} ${darkMode ? style.dark : ""}`}>
      {children}
    </h3>
  );
}
