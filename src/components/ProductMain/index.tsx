import styles from './styles.module.scss'
import { ProductSlider } from '../ProductSlider'
import { ProductSurvey } from '../ProductSurvey'
import { PriceCard } from '../Cards/Price'

export function ProductMain() {
  return (
    <div className={styles.product}>
      <div className={styles.product__inner}>
        <ProductSlider/>
        <ProductSurvey model='Samsung Galaxy S22 ultra 128GB'/>
        <p className={styles.product__prices_title}>Imitation is a form of flattery</p>
        <div className={styles.product__prices}>
          <PriceCard btnInner='£229.00'/>
          <PriceCard btnInner='£228.00'/>
          <PriceCard btnInner='£230.00'/>
        </div>
        <PriceCard text='Our Price £231.00' btnInner='Woohoo! Let’s go!' type='primary'/>
      </div>
    </div>
  )
}