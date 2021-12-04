import { H2 } from "../../atoms";
import { TopicoExperiencia } from "../../molecules";
import style from "./style.module.scss";

export function Experiencias() {
  return (
    <section className={style.experiencias}>
      <H2>Experiências</H2>
      <div>
        <ul>
          <TopicoExperiencia
            title={"Info Jr UFBA"}
            date={"2020 - 2022"}
            position={"Diretor Comercial"}
          />
          <TopicoExperiencia
            title={"Info Jr UFBA"}
            date={"2020 - 2022"}
            position={"Diretor Comercial"}
          />
          <TopicoExperiencia
            title={"Info Jr UFBA"}
            date={"2020 - 2022"}
            position={"Diretor Comercial"}
          />
          <TopicoExperiencia
            title={"Info Jr UFBA"}
            date={"2020 - 2022"}
            position={"Diretor Comercial"}
          />
        </ul>
      </div>
    </section>
  );
}
