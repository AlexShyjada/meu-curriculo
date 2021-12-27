import { ReactNode } from "react";

interface iTechTagsProps {
  id: number;
  href: string;
  children: ReactNode;
}

export const content = <iTechTagsProps[]>[
  {
    id: 1,
    href: "https://www.figma.com/",
    children: "Figma",
  },
  {
    id: 2,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    children: "HTML",
  },
  {
    id: 3,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    children: "CSS",
  },
  {
    id: 4,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/Javascript",
    children: "Javascript",
  },
  {
    id: 5,
    href: "https://beta.reactjs.org/",
    children: "React",
  },
  {
    id: 6,
    href: "https://nextjs.org/docs/getting-started",
    children: "Next",
  },
  {
    id: 7,
    href: "https://v3.vuejs.org/guide/introduction.html",
    children: "Vue",
  },
  {
    id: 8,
    href: "https://nuxtjs.org/",
    children: "Nuxt",
  },
  {
    id: 9,
    href: "https://sass-lang.com/",
    children: "Sass",
  },
  {
    id: 10,
    href: "https://styled-components.com/",
    children: "Styled Components",
  },
  {
    id: 11,
    href: "https://git-scm.com/",
    children: "Git",
  },
];
