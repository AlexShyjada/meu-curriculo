import type {NextPage} from 'next'
import Head from 'next/head'
import {PersonalInformation, DevProjects, Footer, Header} from "../components/layout"
import {StateAndRequestContextProvider} from "../components/context/StateAndRequestContext"
import home from "../components/bosons/home.module.scss"
import { useState } from 'react'

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>AlexShyjada | Currículo</title>
      </Head>

      <StateAndRequestContextProvider darkMode={darkMode} setDarkMode={setDarkMode}>
        <Header/>
        <div className={`${home.divDegrade} ${darkMode ? home.dark : ""}`} ></div>
        <main className={`${home.mainInformation} ${darkMode ? home.dark : ""}`}>
          <div className={`${home.container} container`}>
            <PersonalInformation/>
            <section className={home.projectsLists}>
              <DevProjects/>
            </section>
          </div>
        </main>
        <Footer/>
      </StateAndRequestContextProvider>
    </>
  )
}

export default Home
