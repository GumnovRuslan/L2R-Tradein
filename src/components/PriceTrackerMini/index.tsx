import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import { Button } from '../Button'

interface IProps {
  model?: string
  description?: string
}

export function PriceTrackerMini({model, description}: IProps) {
  return (
    <div className={styles.tracker}>
      <div className={styles.tracker__inner}>
          <div className={styles.tracker__header}>
            <p className={styles.tracker__title}>Price Tracker.</p>
            <p className={styles.tracker__description}>{description}</p>
            {model && <p className={styles.tracker__model}>{model}</p>}
          </div>
          <form className={styles.tracker__form}>
            {!model && <input type="text" className={styles.tracker__input} placeholder='Search Make/Model'/>}
            <input type="mail" className={styles.tracker__input} placeholder='Email'/>
            <input type="text" className={styles.tracker__input} placeholder='Mobile'/>
            <div className={styles.tracker__bottom}>
              {model && <a href="#" className={styles.tracker__another}>Track another device?</a>}
              <Button type='primary'>Track</Button>
            </div>
          </form>
      </div>
    </div>
  )
}