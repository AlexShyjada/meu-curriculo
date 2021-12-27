import { RepositoryName, Commits } from "../../molecules";
import { RepositoryDescription } from "../../atoms";
import style from "./style.module.scss";

interface iProjectRepository {
  href: string;
  repositoryName: string;
  repositoryDescription: string;
  tech: string;
}

export function ProjectRepository(props: iProjectRepository) {
  const { href, repositoryName, repositoryDescription, tech } = props;

  return (
    <a href={href}>
      <div className={style.projectRepository}>
        <RepositoryName repositoryName={repositoryName} />
        <RepositoryDescription>{repositoryDescription}</RepositoryDescription>
        <div className={style.techAndCommits}>
          <Commits commits={tech} />
        </div>
      </div>
    </a>
  );
}
