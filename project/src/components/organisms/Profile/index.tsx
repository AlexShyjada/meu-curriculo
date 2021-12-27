import Image from 'next/image'
import style from "./style.module.scss"
import {ProfileContent} from "../../molecules"
import { useContext } from 'react';
import { StateAndRequestContext } from '../../context/StateAndRequestContext';

export function Profile() {

  const { darkMode} = useContext(StateAndRequestContext);
  
  return (
    <section className={`${style.profile} ${darkMode ? style.dark : ""}`}>
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
