import style from './styles.module.scss'
import Image from 'next/image'

interface IBlock {
  width?: string
  src: string
  alt: string
}

interface IProps {
  blocks: IBlock[]
}

export function Banner({blocks}: IProps) {
  return (
    <section className={`full ${style['banner']}`}>
      <div className={style['banner__inner']}>
        {blocks.map((block, i) => 
          <div className={style['banner__image-wrapper']} style={{width: block.width}} key={i}>
          <Image src={block.src} fill={true} objectFit='cover' alt={block.alt}/>
        </div>)}
      </div>
    </section>
  )
}