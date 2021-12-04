import { ReactNode } from "react"
import style from "./style.module.scss"

interface ISpanTextProps {
  children: ReactNode;
}

export function SpanText(props: ISpanTextProps) {

  const {children} = props

  return (
    <span className={style.spanText}>
      {children}
    </span>
  )
}
