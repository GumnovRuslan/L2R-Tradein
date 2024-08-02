import styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '@/components/Button'


interface IProps {
  brands?: string[]
}

const buttonStyle ={
  width: '100%',
  textTransform: 'uppercase'
} 

export function CardCategory({brands}: IProps) {
    return (
        <div className={styles['card']}>
            <div className={styles['card__inner']}>
                <div className={styles['card__content']}>
                    <Image src="/image.jpg" alt='img' fill={true} objectFit='cover'/>
                    {brands && 
                    <div className={styles['card__brands']}>
                      <div className={styles['card__brands-inner']}>
                        {brands.map((brand, i) => <Button link='#' style={buttonStyle} type='second' hover={true} key={i}>{brand}</Button> )}
                      </div>
                    </div>}
                </div>
                <div className={styles['card__description']}>
                    <p className={styles['card__description-text']}>Best Prices Paid</p>
                </div>
            </div>
        </div>
    )
}