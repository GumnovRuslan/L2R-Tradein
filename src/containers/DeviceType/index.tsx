import styles from './styles.module.scss'
import { Filter } from "@/components/Filter"
import { ProdunctCard } from '@/components/Cards/Product'
import { PriceTracker } from '@/components/PriceTracker'

const products = Array.from({length: 14})

export default function CatalogPage() {
  return (
      <>
      <section className={styles.catalog}>
        <div className={styles.catalog__filter}>
          <Filter/>
        </div>
        <div className={styles.catalog__products}>
          {products.map((_, i) => <ProdunctCard key={i}/>)}
        </div>
      </section>
      <PriceTracker image={{src:'/image.jpg', alt: 'img', width: '45%'}}/>
      </>
  )
}