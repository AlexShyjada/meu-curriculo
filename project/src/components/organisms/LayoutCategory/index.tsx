import style from "./style.module.scss";
import { H2, Link } from "../../atoms";
import { useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

interface iLayoutCategoryProps {
  title: string;
  href: string;
}

export function LayoutCategory(props: iLayoutCategoryProps) {
  const { title, href } = props;

  const {darkMode} = useContext(StateAndRequestContext);

  return (
    <div className={`${style.layoutCategory} ${darkMode ? style.dark : ""}`}>
      <H2>{title}</H2>
      <Link href={href}>Veja todos</Link>
    </div>
  );
}
