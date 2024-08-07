import styles from './styles.module.scss'
import { ProductSlider } from '../ProductSlider'
import { ProductSurvey } from '../ProductSurvey'
import { Flattery } from '@/components/ImitationOfFlattery/Primary'
import { Flattery2 } from '../ImitationOfFlattery/Secondary'

export function ProductMain() {
  return (
    <div className={styles.product}>
      <div className={styles.product__inner}>
        <div className={styles.product__content}>
          <ProductSlider/>
          <ProductSurvey model='Samsung Galaxy S22 ultra 128GB'/>
        </div>
        <Flattery2/>
        <Flattery/>
      </div>
    </div>
  )
}