import { useContext } from "react";
import { H2 } from "../../atoms";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import { TopicosEducacao } from "../../molecules";
import style from "./style.module.scss";

export function Educacao() {
  const { education } = useContext(StateAndRequestContext);

  return (
    <section className={style.educacao}>
      <H2>Educação</H2>
      <div className={style.educacaoList}>
        {education?.map((educations) => {
          return (
            <TopicosEducacao
              key={educations.id}
              school={educations.school}
              date={educations.date}
              course={educations.course}
            />
          );
        })}
      </div>
    </section>
  );
}
