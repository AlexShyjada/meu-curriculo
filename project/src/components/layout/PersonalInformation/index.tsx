import style from "./style.module.scss"
import  {Profile, InformacoesGerais, Tecnologias, Experiencias, Educacao} from '../../organisms'

export function PersonalInformation() {
  return (
    <section className={style.personalInformation}>
      <Profile/>
      <InformacoesGerais/>
      <Tecnologias/>
      <Experiencias/>
      <Educacao/>
    </section>
  )
}
