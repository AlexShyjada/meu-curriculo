import type {NextPage} from 'next'
import Head from 'next/head'
import {PersonalInformation, DevProjects, Footer, Header} from "../components/layout"
import {StateAndRequestContextProvider} from "../components/context/StateAndRequestContext"
import home from "../styles/home.module.scss"
import { useState } from 'react'

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>AlexShyjada | Currículo</title>
      </Head>

      <StateAndRequestContextProvider darkMode={darkMode} setDarkMode={setDarkMode}>
        <Header/>
        <div className={home.divDegrade} ></div>
        <main className={`${home.mainInformation} container`}>
          <PersonalInformation/>
          <section className={home.projectsLists}>
            <DevProjects/>
          </section>
        </main>
        <Footer/>
      </StateAndRequestContextProvider>
    </>
  )
}

export default Home
