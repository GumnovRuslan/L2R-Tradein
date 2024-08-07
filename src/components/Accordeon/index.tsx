import styles from './styles.module.scss'
import { ChevronLeft } from '../Icons'
import { AccordionItem } from './Item'

const items = Array.from({length: 3})

export function Accordion() {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__inner}>
        <div className={styles.accordion__items}>
          {items.map((_, i) => <AccordionItem key={i}/>)}
        </div>
      </div>
    </div>
  )
}