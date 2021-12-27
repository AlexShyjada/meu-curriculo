import { ReactNode } from "react";
import style from "./style.module.scss";

interface iRepositoryDescriptionProps {
  children: ReactNode;
}

export function RepositoryDescription(props: iRepositoryDescriptionProps) {
  const { children } = props;

  return <span className={style.repositoryDescription}>{children}</span>;
}
