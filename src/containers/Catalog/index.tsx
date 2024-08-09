
import styles from './styles.module.scss'
import { Filter } from "@/components/Filter"
import { ProdunctCard } from '@/components/Cards/Product'
import { PriceTracker } from '@/components/PriceTracker'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PopularCategories } from '@/components/OurPopular'
import { SearchCard } from '@/components/Cards/Search'
import { useRouter } from 'next/router'

const paths = [
  {title: 'Home', href: '/'},
]

export default function CatalogPage() {
  const router = useRouter();
  const name: string | string[] | undefined = router.query.index;
  
  const dataPage: any = {
    mobile: {
      title: 'Mobile',
      products: [
        {
          image: '/image.jpg',
          model: 'Apple iPhone 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Apple iPhone 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Apple iPhone 3',
          price: '$546.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },{
          image: '/image.jpg',
          model: 'Apple iPhone 4',
          price: '$345.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        }
      ]
    },
    tablets: {
      title: 'Tablet',
      products: [
        {
          image: '/image.jpg',
          model: 'tablet 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'tablet 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'tablet 3',
          price: '$546.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },{
          image: '/image.jpg',
          model: 'tablet 4',
          price: '$345.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        }
      ]
    },
    wearables: {
      title: 'Wearable',
      products: [
        {
          image: '/image.jpg',
          model: 'Wearable 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Wearable 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Wearable 3',
          price: '$546.00',
          variations: [ '256 GB', '512 GB' ]
        },{
          image: '/image.jpg',
          model: 'Wearable 4',
          price: '$345.00',
          variations: ['128 GB', '256 GB', ]
        }
      ]
    },
    macbooks: {
      title: 'MacBooks',
      products: [
        {
          image: '/image.jpg',
          model: 'MacBooks 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'MacBooks 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'MacBooks 3',
          price: '$546.00',
          variations: [ '256 GB', '512 GB' ]
        },{
          image: '/image.jpg',
          model: 'MacBooks 4',
          price: '$345.00',
          variations: ['128 GB', '256 GB', ]
        }
      ]
    },
    consoles: {
      title: 'Consoles',
      products: [
        {
          image: '/image.jpg',
          model: 'Consoles 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Consoles 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'Consoles 3',
          price: '$546.00',
          variations: [ '256 GB', '512 GB' ]
        },{
          image: '/image.jpg',
          model: 'Consoles 4',
          price: '$345.00',
          variations: ['128 GB', '256 GB', ]
        }
      ]
    },
    airpods: {
      title: 'AirPods',
      products: [
        {
          image: '/image.jpg',
          model: 'AirPods 1',
          price: '$134.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'AirPods 2',
          price: '$124.00',
          variations: ['128 GB', '256 GB', '512 GB' ]
        },
        {
          image: '/image.jpg',
          model: 'AirPods 3',
          price: '$546.00',
          variations: [ '256 GB', '512 GB' ]
        }
      ]
    },
  }

  const data = typeof name == 'string' ? dataPage[name] : {}

  return (
      <div className={styles.page}>
        <section className={styles.catalog}>
          <Breadcrumbs paths={paths} title={data.title}/>
          <div className={styles.catalog__content}>
            <div className={styles.catalog__filter}>
              <Filter/>
            </div>
            <div className={styles.catalog__products}>
              <SearchCard/>
              {data.products.map((product: any, i: number) => <ProdunctCard data={product} key={i}/>)}
            </div>
          </div>
        </section>
        <PriceTracker image={{src:'/image.jpg', alt: 'img', width: '45%'}}/>
        <PopularCategories/>
      </div>
  )
}