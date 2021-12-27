import style from "./style.module.scss"
import { H3 } from '../../atoms'
import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

interface iTopicoExperienciaProps{
  title: string;
  date: string;
  position: string;
}

export function TopicoExperiencia(props: iTopicoExperienciaProps) {

  const {title, date, position} = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <li className={`${style.TopicoExperiencia} ${darkMode? style.dark : ""}`}>
      <H3>{title}</H3>
      <span className={style.date}>{date}</span>
      <span>{position}</span>
    </li>
  )
}
