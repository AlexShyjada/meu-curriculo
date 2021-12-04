import { ReactNode } from "react";
import style from "./style.module.scss"

interface iTechTagsProps{
  href: string;
  children: ReactNode;
}

export function TechTags(props: iTechTagsProps) {

  const {children, href} = props

  return (
    <button className={style.tag}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  )
}
