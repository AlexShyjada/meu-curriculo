import { ReactNode } from "react"
import style from "./style.module.scss"

interface IParagrathProps {
  children: ReactNode;
}

export function Paragrath(props: IParagrathProps) {

  const {children} = props

  return (
    <p className={style.paragrath}>
      {children}
    </p>
  )
}