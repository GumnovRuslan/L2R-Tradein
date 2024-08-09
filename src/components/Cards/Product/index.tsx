import styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '@/components/Button'

interface IProps {
  data: {
    image: string
    model: string
    price: string
    variations: string[]
  }
}

export function ProdunctCard({data}: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__image_wrapper}>
          <Image src='/image.jpg' fill={true} objectFit='cover' alt='img'/>
          <div className={styles.card__view}>
            <Button type='second' link={`/product/${[data.model]}`} hover={true} className={styles.card__view_btn}>View</Button>
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__variations}>
            {data?.variations.map((variation, i) => <button type='button' className={styles.card__variation} key={i}>{variation}</button>)}
          </div>
          <p className={styles.card__name}>{data.model}</p>
          <span className={styles.card__prise}>{data.price}</span>
        </div>
      </div>
    </div>
  )
}