import { ReactNode } from "react";
import style from "./style.module.scss"

interface iH2Props {
  children: ReactNode;
}

export function H2(props: iH2Props) {

  const {children} = props

  return (
    <h2 className={style.titleTwo}>
      {children}
    </h2>
  )
}
