import styles from './styles.module.scss'
import { CardCategory } from '../Cards/Category'

const cards = Array.from({length: 4})

export function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={styles.faq__inner}>
        <h2 className={styles.faq__title}>FAQ’s</h2>
        <div className={styles.faq__content}>
          {cards.map((card, i) => <CardCategory key={i}/>)}
        </div>
      </div>
    </section>
  )
}