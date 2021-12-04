import Image from 'next/image'

interface IPhotoProps {
  src: string;
  alt: string;
  width: string;
  heigt: string;
}

export function Photo(props: IPhotoProps) {

  const {src, alt, width, heigt} = props

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={heigt}
    />
  )
}
