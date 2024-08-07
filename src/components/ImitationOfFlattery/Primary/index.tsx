import styles from './style.module.scss'
import { CardFlattery } from '../../Cards/Flattery'

export function Flattery() {
  return (
    <div className={styles.flattery}>
      <div className={styles.flattery__inner}>
        <p className={styles.flattery__title}>Imitation is a form of flattery</p>
        <div className={styles.flattery__items}>
          <CardFlattery style='left' price='£228.00' image={{src: '/image.jpg', alt: 'img'}} bgColor='#bcebe6'/>
          <CardFlattery style='center' price='£228.00' image={{src: '/image.jpg', alt: 'img'}} bgColor='#e0caed'/>
          <CardFlattery style='center' price='£228.00' image={{src: '/image.jpg', alt: 'img'}} bgColor='#dcdeb8'/>
          <CardFlattery style='right' text='Our Price' price='£228.00' button={{innerText: 'TRADE ME IN NOW'}} image={{src: '/image.jpg', alt: 'img'}} bgColor='var(--color-bg-main)'/>
        </div>
      </div>
    </div>
  ) 
}