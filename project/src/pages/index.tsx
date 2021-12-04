import type {NextPage} from 'next'
import Head from 'next/head'
import  {InformacoesGerais, Tecnologias, Experiencias, Educacao} from '../components/organisms'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AlexShyjada | Currículo</title>
      </Head>

      <InformacoesGerais/>
      <Tecnologias/>
      <Experiencias/>
      <Educacao/>
    </>
  )
}

export default Home
