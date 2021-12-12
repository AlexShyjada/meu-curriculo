import {createServer, Model} from "miragejs"
import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
})

createServer({
  models: {
    generalInformation: Model,
    technologys: Model,
    professionalExperiences: Model,
    academicEducation: Model,
  },

  seeds(server){
    server.db.loadData({
      generalInformation:[
        {
          id: 1,
          link: "https://www.google.com.br/maps/@-13.0096854,-38.5320143,3a,75y,234.74h,80.7t/data=!3m6!1e1!3m4!1sqAU7Yg8JMaZxMXge5vTafA!2e0!7i13312!8i6656",
          src: "/assets/generalInformationIcons/location.svg",
          description: "Salvador-BA, Brasil"
        },
        {
          id: 2,
          link: "https://www.klutch.com.br/",
          src: "/assets/generalInformationIcons/work.svg",
          description: "Klutch Tecnologia"
        },
        {
          id: 3,
          link: "https://github.com/AlexShyjada",
          src: "/assets/generalInformationIcons/github.svg",
          description: "AlexShyjada"
        },
        {
          id: 4,
          link: "https://www.linkedin.com/in/AlexShyjada/",
          src: "/assets/generalInformationIcons/linkedin.svg",
          description: "AlexShyjada"
        },
        {
          id: 5,
          link: "https://www.alexshyjada.com",
          src: "/assets/generalInformationIcons/website.svg",
          description: "https://www.alexshyjada.com"
        },
        {
          id: 6,
          link: "mailto:alexandreshyjada@gmail.com",
          src: "/assets/generalInformationIcons/mail.svg",
          description: "alexandreshyjada@gmail.com"
        }
      ],
      technologys:[
        {
          id: 1,
          name: "Figma",
          link: "https://www.figma.com/",
        },
        {
          id: 2,
          name: "HTML",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        },
        {
          id: 3,
          name: "Javascript",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        },
        {
          id: 4,
          name: "Typescript",
          link: "https://www.typescriptlang.org/docs/",
        },
        {
          id: 5,
          name: "Typescript",
          link: "https://www.typescriptlang.org/docs/",
        },
        {
          id: 6,
          name: "React",
          link: "https://nextjs.org/docs/getting-started",
        },
        {
          id: 7,
          name: "Next",
          link: "https://nextjs.org/docs/getting-started",
        },
        {
          id: 8,
          name: "Vue",
          link: "https://v3.vuejs.org/guide/introduction.html",
        },
        {
          id: 9,
          name: "Nuxt",
          link: "https://nuxtjs.org/",
        },
        {
          id: 10,
          name: "Sass",
          link: "https://sass-lang.com/",
        },
        {
          id: 11,
          name: "Styled Components",
          link: "https://styled-components.com/",
        },
        {
          id: 12,
          name: "Git",
          link: "https://git-scm.com/",
        },
        {
          id: 13,
          name: "Markdown",
          link: "https://www.markdownguide.org/basic-syntax/",
        },
      ],
      professionalExperiences:[
        {
          id: 1,
          title: "Info Jr UFBA",
          date: "2020 - até o momento",
          position: "Diretor Comercial",
        },
        {
          id: 2,
          title: "Prefeitura de Salvador - NTI Saltur",
          date: "2020 - 2022",
          position: "Estagiário em Front-end e Dev-ops",
        },
        {
          id: 3,
          title: "Klutch Tecnologia",
          date: "2021 - até o momento",
          position: "Estagiário em Front-end Next.js",
        },
      ],
      academicEducation:[
        {
          id: 1,
          school: "Microlins Salvador",
          date: "2015 - 2016",
          course: "Manutenção de computadores e redes",
        },
        {
          id: 2,
          school: "Microlins Salvador",
          date: "2016 - 2017",
          course: "Web design",
        },
        {
          id: 3,
          school: "Universidade Federal da Bahia",
          date: "2020 - Até o momento",
          course: "Bacharelado em Sistemas de Informação",
        },
        {
          id: 4,
          school: "Rocketseat",
          date: "2021 - Até o momento",
          course: "Desenvolvimento Web Fullstack",
        },
      ]
    })
  },

  routes(){
    this.namespace = '/api'

    this.get("/generalInformation", () => {
      return this.schema.all("generalInformation")
    })

    this.get("/technologys", () => {
      return this.schema.all("technologys")
    })

    this.get("/professionalExperiences", () => {
      return this.schema.all("professionalExperiences")
    })

    this.get("/academicEducation", () => {
      return this.schema.all("academicEducation")
    })
  }
})