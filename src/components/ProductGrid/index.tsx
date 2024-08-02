import styles from './styles.module.scss'
import Image from 'next/image'

interface IProduct {
  image: string
  alt: string
  link: string
}

interface IProps {
  products?: IProduct[]
}

export function ProductGrid({products}: IProps) {
  console.log(products)
  return (
    <section className={`full ${styles['grid']}`}>
      <div className={styles['grid__inner']}>
        {products?.map((product, i) => 
        <a href={product.link} className={styles['grid__product']} key={i}>
          <Image src={product.image} alt={product.alt} fill={true} objectFit='cover'/>
        </a>)}
      </div>
    </section>
  )
  
}