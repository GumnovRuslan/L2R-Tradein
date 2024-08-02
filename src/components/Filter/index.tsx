import styles from './styles.module.scss'
import { FilterSection } from './Section'

const items = Array.from({length: 5})

export function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__inner}>
        <p className={styles.filter__name}>Filter by:</p>
        <FilterSection name='Mobile' items={items} />
        <FilterSection name='Brands' items={items} />
      </div>
    </div>
  )
}