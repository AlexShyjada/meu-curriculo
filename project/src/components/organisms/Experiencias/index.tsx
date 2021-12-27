import { H2 } from "../../atoms";
import { TopicoExperiencia } from "../../molecules";
import style from "./style.module.scss";
import { content } from "./content";
import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

export function Experiencias() {

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <section className={`${style.experiencias} ${darkMode ? style.dark : ""}`}>
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
