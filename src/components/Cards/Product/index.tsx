import styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '@/components/Button'

const variotions = [
  '128 GB',
  '256 GB',
  '512 GB',
]

export function ProdunctCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__image_wrapper}>
          <Image src='/image.jpg' fill={true} objectFit='cover' alt='img'/>
          <div className={styles.card__view}>
            <Button type='second' link='/product' hover={true} className={styles.card__view_btn}>View</Button>
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__variations}>
            {variotions.map((variotion, i) => 
            <button className={styles.card__variation} key={i}>
              {variotion}
            </button>)}
          </div>
          <p className={styles.card__name}>Apple iPhone 15</p>
          <span className={styles.card__prise}>$395.00</span>
        </div>
      </div>
    </div>
  )
}