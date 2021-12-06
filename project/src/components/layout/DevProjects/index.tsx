import {LayoutCategory, ProjectRepository} from "../../organisms"
import style from "./style.module.scss"

export function DevProjects() {
  return (
    <section className={style.myDevProjects}>
      <LayoutCategory title="My Dev Projects" href="https://github.com/AlexShyjada?tab=repositories"/>

      <div className={style.repositorys}>
        <ProjectRepository/>
        <ProjectRepository/>
        <ProjectRepository/>
        <ProjectRepository/>
      </div>
    </section>
  )
}
