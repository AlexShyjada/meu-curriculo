import { ReactNode } from "react";
import style from "./style.module.scss"

interface iButtonDegradeProps {
  children: ReactNode;
}

export function ButtonDegrade(props: iButtonDegradeProps) {

  const {children} = props

  return (
    <button className={style.buttonDegrade}>
      {children}
    </button>
  )
}
