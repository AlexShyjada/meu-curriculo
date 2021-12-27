import { useContext } from "react";
import { RootObject } from "../../context/StateAndRequestContentInterfaces";

import { StateAndRequestContext } from "../../context/StateAndRequestContext";

import { LayoutCategory, ProjectRepository } from "../../organisms";
import style from "./style.module.scss";

export function DevProjects() {
  const { githubRepositorys } = useContext(StateAndRequestContext);

  return (
    <section className={style.myDevProjects}>
      <LayoutCategory
        title="My Dev Projects"
        href="https://github.com/AlexShyjada?tab=repositories"
      />
      <div className={style.repositorys}>
        {githubRepositorys.slice(2, 10).map((repo: RootObject) => {
          return (
            <ProjectRepository
              key={repo.id}
              href={repo.svn_url}
              repositoryName={repo.name}
              repositoryDescription={repo.description}
              tech={repo.language}
            />
          );
        })}
      </div>
    </section>
  );
}
