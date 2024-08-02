'use client'

import classnames from '@/utils/classnames'
import styles from './styles.module.scss'
import { useState } from 'react'

interface IProps {
  name: string
  items: any
}

export function FilterSection({name, items}: IProps) {
  const [selectedItems, setSelectedItems] = useState([false, false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className={styles.section}>
      <p className={styles.section__name}>{name}</p>
      <div className={styles.section__items}>
        {items.map((_: any, i: number) => 
        <label className={styles.section__item} key={i}>
          <input type="checkbox" className={styles.section__item_checkbox_false} checked={selectedItems[i]} onChange={() => handleCheckboxChange(i)}/>
          <div className={classnames(styles.section__item_checkbox_true, selectedItems[i] ? styles.checked : '')}></div>
          <span className={styles.section__item_text}>Mobiles</span>
        </label>)}
      </div>
    </div>
  )
}