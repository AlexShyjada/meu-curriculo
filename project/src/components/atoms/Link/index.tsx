import React, { ReactNode } from 'react'
import style from "./style.module.scss"

interface iLinkProps{
  href: string;
  children: ReactNode;
}

export function Link(props: iLinkProps) {

  const { href, children } = props

  return (
    <a className={style.link} href={href}>{children}</a>
  )
}
