import { H2 } from "../../atoms";
import { TopicosEducacao } from "../../molecules";
import style from "./style.module.scss";
import { content } from "./content";
import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

export function Educacao() {

  const {darkMode} = useContext(StateAndRequestContext);

  return (
    <section className={`${style.educacao} ${darkMode? style.dark : ""}`}>
      <H2>Educação</H2>
      <div className={style.educacaoInfo}>
        {content.map((educationItem) => {
          return (
            <TopicosEducacao
              key={educationItem.id}
              school={educationItem.school}
              date={educationItem.date}
              course={educationItem.course}
            />
          )
        })}
      </div>
    </section>
  );
}
