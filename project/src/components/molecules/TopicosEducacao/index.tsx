import { useContext } from "react";
import { H3 } from "../../atoms";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iTopicosEducacaoProps {
  school: string;
  date: string;
  course: string;
}

export function TopicosEducacao(props: iTopicosEducacaoProps) {
  const { school, date, course } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <div className={`${style.topicoEducacao} ${darkMode ? style.dark : ""}`}>
      <H3>{school}</H3>
      <span className={style.date}>{date}</span>
      <span>{course}</span>
    </div>
  );
}
