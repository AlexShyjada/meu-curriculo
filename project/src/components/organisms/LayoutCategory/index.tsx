import style from './style.module.scss'
import { H2, Link } from '../../atoms'

interface iLayoutCategoryProps{
  title: string;
  href: string;
}

export function LayoutCategory(props: iLayoutCategoryProps) {

  const { title, href } = props

  return (
    <div className={style.layoutCategory}>
      <H2>{title}</H2>
      <Link href={href}>Veja todos</Link>
    </div>
  )
}
