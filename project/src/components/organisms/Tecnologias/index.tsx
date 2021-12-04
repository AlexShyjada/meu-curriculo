import React from 'react'
import {H2} from '../../atoms'
import {TechTags} from '../../molecules'
import style from "./style.module.scss"

export function Tecnologias() {
  return (
    <section className={style.tecnologias}>
      <H2>
        Tecnologias
      </H2>
      <div>
        <TechTags href="https://www.figma.com/">
          Figma
        </TechTags>
        <TechTags href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
          HTML
        </TechTags>
        <TechTags href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
          CSS
        </TechTags>
        <TechTags href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
          Javascript
        </TechTags>
        <TechTags href="https://www.typescriptlang.org/docs/">
          Typescript
        </TechTags>
        <TechTags href="https://beta.reactjs.org/">
          React
        </TechTags>
        <TechTags href="https://nextjs.org/docs/getting-started">
          Next
        </TechTags>
        <TechTags href="https://v3.vuejs.org/guide/introduction.html">
          Vue
        </TechTags>
        <TechTags href="https://nuxtjs.org/">
          Nuxt
        </TechTags>
        <TechTags href="https://sass-lang.com/">
          Sass
        </TechTags>
        <TechTags href="https://styled-components.com/">
          Styled Components
        </TechTags>
        <TechTags href="https://git-scm.com/">
          Git
        </TechTags>
        <TechTags href="https://www.markdownguide.org/basic-syntax/">
          Markdown
        </TechTags>
      </div>
    </section>
  )
}