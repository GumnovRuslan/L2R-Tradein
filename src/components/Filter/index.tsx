'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

const items = Array.from({length: 5})

export function Filter() {
  const [selectedItems, setSelectedItems] = useState([])

  const handlerSelectedItem = (index) => {
    setSelectedItems([...selectedItems, ])
  }

  return (
    <div className={styles['filter']}>
      <div className={styles['filter__inner']}>
        <p className={styles['filter__name']}>Filter by:</p>
        <div className={styles['filter__section']}>
          <p className={styles['filter__section-title']}>Categories</p>
          <div className={styles['filter__items']}>
            {items.map((_, i)=> 
            <label className={styles['filter__item']} key={i}>
              <input type="checkbox" className={styles['filter__checkbox-false']} checked={selectedItems[i]}/>
              <div className={styles['filter__checkbox-true']}></div>
              <span className={styles['filter__item-text']}>Mobiles</span>
            </label>)}
            
          </div>
        </div>
      </div>
    </div>
  )
}