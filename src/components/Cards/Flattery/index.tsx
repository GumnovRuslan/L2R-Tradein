import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import { Button } from '@/components/Button'
import Image from 'next/image'

interface IProps {
  style: 'left' | 'center' | 'right'
  price: string
  bgColor?: string
  text?: string
  button?: {
    innerText: string
  }
  className?: string
  image?: {
    src: string
    alt: string
  }
}

export function CardFlattery({style, price, bgColor, text, button, image, className}: IProps) {
  return (
    <div className={classnames(styles.card , className)} style={{color: bgColor}}>
      <div className={classnames(styles.card__inner, styles[`card__${style}`])}>
        <div data-content className={styles.card__content}>
          {image && 
          <div className={styles.card__content_image}>
            <div className={styles.card__image_wrapper}>
              <Image src={image?.src} alt={image.alt} width={100} height={50} objectFit='cover'/>
            </div>
          </div> }
          <div className={styles.card__content_text}>
            {text && <span className={styles.card__text}>{text}</span>}
            {price && <span className={styles.card__price}>{price}</span>}
          </div>
        </div>
        {button && <Button type='primary' className={styles.card__btn}>{button?.innerText}</Button>}
      </div>
    </div>
  )
}