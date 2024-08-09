'use client'
import styles from './styles.module.scss'
import { PriceTracker } from '@/components/PriceTracker'
import data from '../Header/data'
import { useState } from 'react'
import classnames from '@/utils/classnames'
import Link from 'next/link'

interface Props {
  selectBrand: number
  isOpen: boolean
  setIsOpen: (bol: boolean) => void
}

export function Menu({selectBrand, isOpen, setIsOpen}: Props) {
  const popylar = Array.from({length: 8}).map((_, i)=> `${data.categories[selectBrand-1]?.product} ${i}`)
  const [activeBrand, setActiveBrand] = useState(2)

  return (
    <div className={`${styles["menu"]} ${isOpen ? styles["menu--visible"] : ''}`} onMouseLeave={() => setIsOpen(false)} >
      <div className={styles["menu__inner"]}>
        <p className={styles["menu__title"]}>Choose your brand</p>
        <div className={styles["menu__brands"]}>
          {data.brands.map((el: string, i) => 
          <button type='button'
          className={classnames(styles.menu__brand, activeBrand === i ? styles.menu__brand_active : '')}
          onClick={() => setActiveBrand(i)} 
          key={i}>{el}</button>)}
        </div>
        <div className={styles["menu__content"]}>
          <div className={styles["menu__models-list"]}>
            <p className={styles["menu__content-title"]}>Hot rigth now</p>
            <div className={styles["menu__content-items"]}>
              {popylar.map((el, i)=> <Link href="#" className={styles.menu__content_item} key={i}>{el}</Link>)}
            </div>
          </div>

          <div className={styles["menu__brands-list"]}>
            <p className={styles["menu__content-title"]}>Brands</p>
            <div className={styles["menu__brands-items"]}>
              {data.brands.map((el: string, i) => 
              <button type='button' className={classnames(styles.menu__content_item, activeBrand === i ? styles.menu__content_item_select : '')} 
              onClick={() => setActiveBrand(i)} key={i}>{el}</button>)}
            </div>
          </div>

          <div className={styles["menu__categories-list"]}>
            <p className={styles["menu__content-title"]}>categories</p>
            <div className={styles["menu__categories-items"]}>
              {data.categories.map((el, i) => <button type='button' className={classnames(styles.menu__content_item, selectBrand == i+1 ? styles.menu__content_item_select : '')} key={i}>{el.title}</button>)}
            </div>
          </div>
        </div>
        <PriceTracker section='full'/>
      </div>
    </div>    
  )
}