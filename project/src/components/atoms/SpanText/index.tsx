import { ReactNode, useContext } from "react"
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss"

interface ISpanTextProps {
  children: ReactNode;
}

export function SpanText(props: ISpanTextProps) {

  const {children} = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <span className={`${style.spanText} ${darkMode? style.dark : ""}`}>
      {children}
    </span>
  )
}
