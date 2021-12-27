import { ReactNode, useContext } from "react"
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss"

interface IParagrathProps {
  children: ReactNode;
}

export function Paragrath(props: IParagrathProps) {

  const {children} = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <p className={`${style.paragrath} ${darkMode ? style.dark : ""}`}>
      {children}
    </p>
  )
}