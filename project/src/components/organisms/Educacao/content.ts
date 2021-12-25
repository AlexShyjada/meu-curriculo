interface iEducationProps {
  id: number;
  school: string;
  date: string;
  course: string;
}

export const content = <iEducationProps[]> [
  {
    id: 1,
    school: "Microlins Salvador",
    date: "2015 - 2016",
    course: "Manutenção de computadores e redes"
  },
  {
    id: 2,
    school: "Microlins Salvador",
    date: "2016 - 2018",
    course: "Web design"
  },
  {
    id: 3,
    school: "Universidade Federal da Bahia",
    date: "2021 - Até o momento",
    course: "Bacharelado em Sistemas de Informação"
  },
  {
    id: 4,
    school: "Rocketseat",
    date: "2015 - 2016",
    course: "Desenvolvimento web Fullstack"
  },
]