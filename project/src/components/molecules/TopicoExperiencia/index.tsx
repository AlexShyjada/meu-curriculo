import style from "./style.module.scss"
import { H3 } from '../../atoms'

interface iTopicoExperienciaProps{
  title: string;
  date: string;
  position: string;
}

export function TopicoExperiencia(props: iTopicoExperienciaProps) {

  const {title, date, position} = props

  return (
    <li className={style.TopicoExperiencia}>
      <H3>{title}</H3>
      <span className={style.date}>{date}</span>
      <span>{position}</span>
    </li>
  )
}
