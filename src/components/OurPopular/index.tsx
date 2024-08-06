import styles from './styles.module.scss'
import { CardCategory } from '../Cards/Category'

const cards = Array.from({length: 4})

export function PopularCategories() {
  return (
    <section className={`full ${styles.popular}`}>
      <div className={styles.popular__inner}>
        <h2 className={styles.popular__title}>Our <br/> Most Loved <br/> Categories</h2>
        <div className={styles.popular__items}>
          {cards.map((_, i) => <CardCategory brands={['Apple', 'Samsung']}/>)}
        </div>
      </div>
    </section>
  )
}