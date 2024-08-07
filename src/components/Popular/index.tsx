'use client'

import styles from './styles.module.scss'
import { CardCategory } from '../Cards/Category'
import { useRef, useState } from 'react'

const columns = ['Mobile', 'Tablets', 'Wearables',]
const brands: string[] = ['all', 'apple', 'samsung']

export function Popular() {
  const [idCard, setIdCard] = useState(0)
  const thumb = useRef<null | HTMLDivElement>(null)

  if (idCard > -1 && thumb.current) {
    thumb.current.style.transform = `translateX(${((302 - 157) / 2) + ((302 + 16) * idCard)}px)`
  }

  return (
    <section className={styles['popular']}>
      <div className={styles['popular__inner']}>
        <h2 className={styles['popular__title']}>Most Loved</h2>
        <div className={styles['popular__categories']}>
          <div className={styles['popular__bar']}>
            <div className={styles['popular__bar-thumb']} ref={thumb}></div>
          </div>
          {columns.map((column, i) => 
          <div className={styles['popular__column']} key={i}>
            <p className={styles['popular__categories-name']}>{column}</p>
            <div className={styles['popular__card-wrapper']} 
            onMouseEnter={() => setIdCard(i)} 
            onMouseLeave={() => setIdCard(-1)}>
              <CardCategory brands={brands}/>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  )
}