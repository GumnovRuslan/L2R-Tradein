import styles from './styles.module.scss'
import { ProductInfo } from '@/components/ProductInfo'
import { ProductMain } from '@/components/ProductMain'

export function ProductPage() {
  return (
    <>
      <ProductMain/>
      <ProductInfo/>
    </>
    
  )
}