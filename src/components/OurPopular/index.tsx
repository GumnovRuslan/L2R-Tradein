import styles from './styles.module.scss'
import { CardCategory } from '../Cards/Category'

export function PopularCategories() {
  return (
    <section className={`full ${styles.popular}`}>
      <div className={styles.popular__inner}>
        <h2 className={styles.popular__title}>Our <br/> Most Loved <br/> Categories</h2>
        <div className={styles.popular__items}>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
        </div>
      </div>
    </section>
  )
}