import React, { useContext } from "react";
import style from "./style.module.scss";
import { H2 } from "../../atoms/H2";
import { TopicoInformacaoGeral } from "../../molecules";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";

export function InformacoesGerais() {
  const { darkMode } = useContext(StateAndRequestContext);
  return (
    <section className={`${style.experienciaGeral} ${darkMode ? style.dark : ""}`}>
      <H2>Informações gerais</H2>
      <TopicoInformacaoGeral href="https://www.google.com.br/maps/@-13.0096854,-38.5320143,3a,75y,234.74h,80.7t/data=!3m6!1e1!3m4!1sqAU7Yg8JMaZxMXge5vTafA!2e0!7i13312!8i6656">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Salvador-BA, Brasil
      </TopicoInformacaoGeral>

      <TopicoInformacaoGeral href="https://www.klutch.com.br/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            fill={darkMode ? "#090918" : "#fafafa"}
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Klutch Tecnologia
      </TopicoInformacaoGeral>

      <TopicoInformacaoGeral href="https://github.com/AlexShyjada">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_407_105)">
            <path
              d="M9 19C4 20.5 4 16.5 2 16L9 19ZM16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.5136 2.19835 20 1C20 1 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
              fill={darkMode ? "#090918" : "#fafafa"}
            />
            <path
              d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.5136 2.19835 20 1C20 1 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
              stroke={!darkMode ? "#090918" : "#fafafa"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_407_105">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        AlexShyjada
      </TopicoInformacaoGeral>

      <TopicoInformacaoGeral href="https://www.linkedin.com/in/AlexShyjada/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9H2V21H6V9Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        AlexShyjada
      </TopicoInformacaoGeral>

      <TopicoInformacaoGeral href="https://www.alexshyjada.com">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        https://www.alexshyjada.com
      </TopicoInformacaoGeral>

      <TopicoInformacaoGeral href="mailto:alexandreshyjada@gmail.com">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            fill={darkMode ? "#090918" : "#fafafa"}
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M22 6L12 13L2 6" fill={darkMode ? "#090918" : "#fafafa"} />
          <path
            d="M22 6L12 13L2 6"
            stroke={!darkMode ? "#090918" : "#fafafa"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        alexandreshyjada@gmail.com
      </TopicoInformacaoGeral>
    </section>
  );
}
