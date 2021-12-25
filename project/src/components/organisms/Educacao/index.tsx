import { H2 } from "../../atoms";
import { TopicosEducacao } from "../../molecules";
import style from "./style.module.scss";
import { content } from "./content";

export function Educacao() {
  return (
    <section className={style.educacao}>
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
