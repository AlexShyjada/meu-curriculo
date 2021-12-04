import { H3 } from '../../atoms'
import style from "./style.module.scss"

interface iTopicosEducacaoProps{
  title: string;
  date: string;
  school: string;
}

export function TopicosEducacao(props: iTopicosEducacaoProps) {

  const {title, date, school} = props

  return (
    <div className={style.topicoEducacao}>
      <H3>{title}</H3>
      <span className={style.date}>{date}</span>
      <span>{school}</span>
    </div>
  )
}
