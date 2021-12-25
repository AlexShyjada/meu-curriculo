interface iExpreriencesProps {
  id: number;
  title: string;
  date: string;
  position: string;
}

export const content = <iExpreriencesProps[]> [
  {
    id: 1,
    title: "Info Jr UFBA",
    date: "2020.2 - Até o momento",
    position: "Diretor Comercial"
  },
  {
    id: 2,
    title: "Saltur - Prefeitura de Salvador",
    date: "2021.1 - 2021.2",
    position: "Estagiario em Desenvolvimento Web"
  },
  {
    id: 3,
    title: "Klutch Tecnologia",
    date: "2021.2 - Até o momento",
    position: "Estagiário em Desenvolvimento Web"
  },
] 