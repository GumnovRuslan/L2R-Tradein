import styles from './styles.module.scss'
import { PriceCard } from '@/components/Cards/Price'

const producPrices = [
  {
    btnText: '£229.00',  
  },
  {
    btnText: '£228.00',  
  },
  {
    btnText: '£230.00',  
  },
]

export function Flattery2() {
  return (
    <div className={styles.flattery}>
      <div className={styles.flattery__inner}>
        <p className={styles.flattery__title}>Imitation is a form of flattery</p>
        <div className={styles.flattery__content}>
          <div className={styles.flattery__items}>
            {producPrices.map((el, i)=> <PriceCard btnInner={el.btnText} key={i}/>)}
          </div>
          <PriceCard text='Our Price £231.00' btnInner='Woohoo! Let’s go!' type='primary'/>
        </div>
      </div>
    </div>
    
  )
}