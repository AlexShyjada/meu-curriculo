import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import { H2 } from "../../atoms";
import { TopicoExperiencia } from "../../molecules";
import style from "./style.module.scss";

export function Experiencias() {
  const { professionalExperiences } = useContext(StateAndRequestContext);

  return (
    <section className={style.experiencias}>
      <H2>Experiências</H2>
      <div>
        <ul>
          {professionalExperiences.map((experience) => {
            return (
              <TopicoExperiencia
                key={experience.id}
                title={experience.title}
                date={experience.date}
                position={experience.position}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
