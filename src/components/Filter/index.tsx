import styles from './styles.module.scss'
import { FilterSection } from './Section'

const filter = [
  {
    title: 'Categories',
    items: [
      'Mobile',
      'Tablets',
      'Wearable',
      'Consiles',
      'AirPods',
      'MacBooks'
    ]
  },
  {
    title: 'Brands',
    items: [
      'Apple',
      'LG',
      'Google',
      'Samsung',
      'Sony',
    ]
  },
]

export function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__inner}>
        <p className={styles.filter__name}>Filter by:</p>
        {filter.map((sectionData, i) => <FilterSection data={sectionData} key={i}/>)}
      </div>
    </div>
  )
}