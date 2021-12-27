import {H2, SpanText, ButtonDegrade} from "../../atoms";
import style from "./style.module.scss"


export function ProfileContent() {
  return (
    <div className={style.profileContent}>
      <H2>Alexandre Shyajda</H2>
      <SpanText>Front-end Developer &amp; UI/UX Designer</SpanText>
      <ButtonDegrade>
        Baixar currículo
      </ButtonDegrade>
    </div>
  )
}
