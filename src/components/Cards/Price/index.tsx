import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import Image from 'next/image'
import { Button } from '@/components/Button'

interface IProps {
  type?: 'primary'
  text?: string
  btnInner: string
}

export function PriceCard({text, btnInner, type}: IProps) {
  return (
    <div className={classnames(styles.card, type ? styles['card_'+type] : '')}>
      <div className={styles.card__inner}>
        <div className={styles.card__image_wrapper}>
          <Image src={'/image.jpg'} width={300} height={60} objectFit='cover' alt='img'/>
        </div>
        {text && <p className={styles.card__text}>{text}</p>}
      </div>
      <Button type='primary' className={styles.card__btn}>{btnInner}</Button>
    </div>
  )
}