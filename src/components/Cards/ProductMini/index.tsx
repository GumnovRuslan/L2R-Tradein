import styles from './styles.module.scss'
import Image from 'next/image'
import { Close } from '@/components/Icons'

export function CardProductMini() {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__product}>
          <div className={styles.card__image_wrapper}>
            <Image src='/image.jpg' width={70} height={70} alt='img'/>
          </div>
        </div>
        <div className={styles.card__content}>
          <p className={styles.card__product_name}>Samsung Galaxy S22 ultra 128GB</p>
          <button type='button' className={styles.card__btn_icon_close}>
            <Close/>
          </button>
          <span className={styles.card__product_price}>£280.00</span>
        </div>
      </div>
    </div>
  )
}