import type {NextPage} from 'next'
import Head from 'next/head'
import {PersonalInformation, DevProjects, Footer} from "../components/layout"
import {StateAndRequestContextProvider} from "../components/context/StateAndRequestContext"
import home from "../styles/home.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AlexShyjada | Currículo</title>
      </Head>

      <StateAndRequestContextProvider>
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
