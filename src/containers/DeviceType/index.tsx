import styles from './styles.module.scss'
import { Filter } from "@/components/Filter"
import { ProdunctCard } from '@/components/Cards/Product'
import { PriceTracker } from '@/components/PriceTracker'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PopularCategories } from '@/components/OurPopular'
import { SearchCard } from '@/components/Cards/Search'

const products = Array.from({length: 14})
const paths = [
  {title: 'Home', href: '/'},
  {title: 'Mobile', href: '/'},
]

export default function CatalogPage() {

  return (
      <div className={styles.page}>
        <section className={styles.catalog}>
          <Breadcrumbs paths={paths} title='Mobile'/>
          <div className={styles.catalog__content}>
            <div className={styles.catalog__filter}>
              <Filter/>
            </div>
            <div className={styles.catalog__products}>
              <SearchCard/>
              {products.map((_, i) => <ProdunctCard key={i}/>)}
            </div>
          </div>
        </section>

        <PriceTracker image={{src:'/image.jpg', alt: 'img', width: '45%'}}/>

        <PopularCategories/>
      </div>
  )
}