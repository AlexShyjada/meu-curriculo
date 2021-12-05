import type {NextPage} from 'next'
import Head from 'next/head'
import {PersonalInformation} from "../components/layout"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AlexShyjada | Currículo</title>
      </Head>

      <PersonalInformation/>
    </>
  )
}

export default Home
