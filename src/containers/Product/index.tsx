import styles from './styles.module.scss'
import { ProductInfo } from '@/components/ProductInfo'
import { ProductMain } from '@/components/ProductMain'
import { PriceTracker } from '@/components/PriceTracker'
import { Accordion } from '@/components/Accordeon'
import { Tabs } from '@/components/Tabs'
import { FAQ } from '@/components/FAQ'

export function ProductPage() {
  return (
    <>
      <ProductMain/>
      <ProductInfo/>
      <FAQ/>
      <Tabs/>
      <PriceTracker image={{src: '/image.jpg', alt: 'img', width: '45%'}} model='Samsung Galaxy S22 Ultra 128BG'/>
      <Accordion/>
    </>
    
  )
}