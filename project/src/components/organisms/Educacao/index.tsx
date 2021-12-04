import { H2 } from "../../atoms";
import { TopicosEducacao } from "../../molecules";
import style from "./style.module.scss";

export function Educacao() {
  return (
    <section className={style.educacao}>
      <H2>Educação</H2>
      <div className={style.educacaoInfo}>
        <TopicosEducacao
          title="Microlins Salvador"
          date="2015 - 2016"
          school="Manutenção de computadores e redes"
        />
        <TopicosEducacao
          title="Microlins Salvador"
          date="2016 - 2018"
          school="Web design"
        />
        <TopicosEducacao
          title="Universidade Federal da Bahia"
          date="2020 - Até o momento"
          school="Bacharelado em Sistemas de Informação"
        />
        <TopicosEducacao
          title="Rocketseat"
          date="2021 - Até o momento"
          school="Desenvolvimento web Fullstack"
        />
      </div>
    </section>
  );
}
