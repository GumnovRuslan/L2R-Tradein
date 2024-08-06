import styles from './styles.module.scss'
import { ProductInfo } from '@/components/ProductInfo'
import { ProductMain } from '@/components/ProductMain'
import { PriceTracker } from '@/components/PriceTracker'
import { Accordion } from '@/components/Accordeon'
import { Tabs } from '@/components/Tabs'

export function ProductPage() {
  return (
    <>
      <ProductMain/>
      <ProductInfo/>
      <Tabs/>
      <PriceTracker image={{src: '/image.jpg', alt: 'img', width: '45%'}} model='Samsung Galaxy S22 Ultra 128BG'/>
      <div className={styles.accordion}>
        <Accordion/>
      </div>
      
    </>
    
  )
}