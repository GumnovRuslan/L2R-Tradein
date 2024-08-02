import styles from './styles.module.scss'
import Image from 'next/image'

export function ProdunctCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__image_wrapper}>
          <Image src='/image.jpg' fill={true} objectFit='cover' alt='img'/>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__variations}>
            <button className={styles.card__variation}>
              128<br/>GB
            </button>
            <button className={styles.card__variation}>
              128<br/>GB
            </button>
            <button className={styles.card__variation}>
              128<br/>GB
            </button>
          </div>
          <p className={styles.card__name}>Apple iPhone 15</p>
          <span className={styles.card__prise}>$395.00</span>
        </div>
      </div>
    </div>
  )
}