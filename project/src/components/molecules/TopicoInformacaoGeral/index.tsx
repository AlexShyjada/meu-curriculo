import { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iTopicoExperienciaGeralProps {
  children: ReactNode;
  href: string;
}

export function TopicoInformacaoGeral(props: iTopicoExperienciaGeralProps) {
  const { children, href } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${style.topicoExperienciaGeral} ${
        darkMode ? style.dark : ""
      }`}
    >
      {children}
    </a>
  );
}
