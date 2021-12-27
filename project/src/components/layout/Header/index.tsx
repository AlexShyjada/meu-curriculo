import { useContext } from "react";
import {
  ButtonDegrade,
  Link,
  LogoAlexShyjadaDark,
  LogoAlexShyjadaLight,
} from "../../atoms";
import style from "./style.module.scss";
import { StateAndRequestContext } from "../../context/StateAndRequestContext";
import { content } from "./content";

export function Header() {
  const { darkMode, setDarkMode } = useContext(StateAndRequestContext);

  function handleChangeDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className={`${style.header} ${darkMode ? style.dark : ""}`}>
      <div className={style.headerContainer}>
        <a href="https://www.alexshyjada.com">
          {darkMode ? <LogoAlexShyjadaDark /> : <LogoAlexShyjadaLight />}
        </a>

        <nav>
          {content.map(link => {
            return (
              <Link key={link.id} href={link.href}>
                {link.text}
              </Link>
            )
          })}
          <div className={style.clToggleSwitch}>
            <label className={`${style.clSwitch} ${darkMode ? style.dark : ""}`}>
              Darkmode
              <input type="checkbox" onChange={handleChangeDarkMode} />
              <span></span>
            </label>
          </div>
        </nav>

        <a
          href="https://www.alexshyjada.com/#contact"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDegrade>Entrar em contato</ButtonDegrade>
        </a>
      </div>
    </header>
  );
}
