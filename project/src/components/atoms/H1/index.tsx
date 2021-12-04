import {ReactNode} from 'react'
import style from "./style.module.scss"

interface iH1Props {
  children: ReactNode;
}

export function H1(props: iH1Props) {

  const {children} = props

  return (
    <h1 className={style.titleOne}>
      {children}
    </h1>
  )
}
