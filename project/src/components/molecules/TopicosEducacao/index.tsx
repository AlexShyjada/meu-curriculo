import { H3 } from '../../atoms'
import style from "./style.module.scss"

interface iTopicosEducacaoProps{
  school: string;
  date: string;
  course: string;
}

export function TopicosEducacao(props: iTopicosEducacaoProps) {

  const {school, date, course} = props

  return (
    <div className={style.topicoEducacao}>
      <H3>{school}</H3>
      <span className={style.date}>{date}</span>
      <span>{course}</span>
    </div>
  )
}
