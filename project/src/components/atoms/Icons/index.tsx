import {ReactNode} from 'react'

interface iIconsProps {
  children: ReactNode;
}

export function Icons(props: iIconsProps) {

  const {children} = props

  return (
    <>
      {children}
    </>
  )
}

