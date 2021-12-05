import Image from 'next/image'
import style from "./style.module.scss"
import {ProfileContent} from "../../molecules"

export function Profile() {
  return (
    <section className={style.profile}>
      <Image
        src="/assets/AlexShyjada-ft.png"
        alt="Picture of the author"
        width={128}
        height={128}
      />

      <ProfileContent/>
    </section>
  )
}
