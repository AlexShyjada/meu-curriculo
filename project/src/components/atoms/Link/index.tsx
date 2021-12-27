import React, { ReactNode, useContext } from "react";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import style from "./style.module.scss";

interface iLinkProps {
  href: string;
  children: ReactNode;
}

export function Link(props: iLinkProps) {
  const { href, children } = props;

  const { darkMode } = useContext(StateAndRequestContext);

  return (
    <a
      className={`${style.link} ${darkMode ? style.dark : ""}`}
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
