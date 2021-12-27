import React, { ReactNode } from 'react'
import style from "./style.module.scss"

interface iLinkProps{
  href: string;
  children: ReactNode;
}

export function Link(props: iLinkProps) {

  const { href, children } = props

  return (
    <a className={style.link} target="_blank" href={href} rel="noreferrer">{children}</a>
  )
}
