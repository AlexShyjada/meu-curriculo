import { RepositoryName, Commits } from "../../molecules";
import { RepositoryDescription } from "../../atoms";
import style from "./style.module.scss";
import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

interface iProjectRepository {
  href: string;
  repositoryName: string;
  repositoryDescription: string;
  tech: string;
}

export function ProjectRepository(props: iProjectRepository) {
  const { href, repositoryName, repositoryDescription, tech } = props;

  const {darkMode} = useContext(StateAndRequestContext);

  return (
    <a href={href}>
      <div className={`${style.projectRepository} ${darkMode ? style.dark : ""}`}>
        <RepositoryName repositoryName={repositoryName} />
        <RepositoryDescription>{repositoryDescription}</RepositoryDescription>
        <div className={style.techAndCommits}>
          <Commits commits={tech} />
        </div>
      </div>
    </a>
  );
}
