import { ReactNode } from 'react'
import style from "./style.module.scss"

interface iH3Props {
  children: ReactNode;
}

export function H3(props: iH3Props) {

  const {children} = props

  return (
    <h3 className={style.titleThree}>
      {children}
    </h3>
  )
}
