import {RepositoryName, Commits} from "../../molecules"
import {SpanText} from "../../atoms"
import style from "./style.module.scss"


export function ProjectRepository() {
  return (
    <div className={style.projectRepository}>
      <RepositoryName/>
      <SpanText>Consulte os códigos de erro que aparecem no painel do veículo Onix.</SpanText>
      <Commits/>
    </div>
  )
}
