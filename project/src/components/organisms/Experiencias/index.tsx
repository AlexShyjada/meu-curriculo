import { H2 } from "../../atoms";
import { TopicoExperiencia } from "../../molecules";
import style from "./style.module.scss";
import { content } from "./content";

export function Experiencias() {
  return (
    <section className={style.experiencias}>
      <H2>Experiências</H2>
      <div>
        <ul>
          {content.map((experienceItem) => {
            return (
              <TopicoExperiencia
                key={experienceItem.id}
                title={experienceItem.title}
                date={experienceItem.date}
                position={experienceItem.position}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
