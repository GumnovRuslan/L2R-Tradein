'use client'
import styles from './styles.module.scss'
import { ProductSlider } from '../ProductSlider'
import { ProductSurvey } from '../ProductSurvey'
import { Flattery } from '@/components/ImitationOfFlattery/Primary'
import { Flattery2 } from '../ImitationOfFlattery/Secondary'
import { useRouter } from 'next/router'

export function ProductMain() {
  const router = useRouter();
  const name: string | string[] | undefined = router.query.index;
  const model = typeof name == 'string' ? name : ''

  return (
    <div className={styles.product}>
      <div className={styles.product__inner}>
        <div className={styles.product__content}>
          <ProductSlider/>
          <ProductSurvey model={model}/>
        </div>
        <Flattery2/>
        <Flattery/>
      </div>
    </div>
  )
}