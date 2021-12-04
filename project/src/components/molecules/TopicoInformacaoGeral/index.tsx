import { ReactNode } from "react";
import style from "./style.module.scss"

interface iTopicoExperienciaGeralProps{
  children: ReactNode;
  href: string;
}

export function TopicoInformacaoGeral(props: iTopicoExperienciaGeralProps) {

  const {children, href } = props

  return (
    <a href={href} target="_blank" rel="noreferrer" className={style.topicoExperienciaGeral}>
      {children}
    </a>
  )
}
