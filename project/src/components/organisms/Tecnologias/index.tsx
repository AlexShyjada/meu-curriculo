import React from "react";
import { H2 } from "../../atoms";
import { TechTags } from "../../molecules";
import style from "./style.module.scss";
import { content } from "./content";

export function Tecnologias() {
  return (
    <section className={style.tecnologias}>
      <H2>Minhas Tecnologias</H2>
      <div>
        {content.map((techTag) => {
          return (
            <TechTags key={techTag.id} href={techTag.href}>{techTag.children}</TechTags>
          )
        })}
      </div>
    </section>
  );
}
