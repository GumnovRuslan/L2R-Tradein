'use client'
import styles from './styles.module.scss'
import { AccordionItem } from './Item'
import { useState } from 'react'

const items = Array.from({length: 3})

export function Accordion() {
  const [itemIdOpen, setItemIdOpen] = useState<null | number>(null)
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__inner}>
        <div className={styles.accordion__items}>
          {items.map((_, i) => <AccordionItem key={i} isOpen={itemIdOpen === i} setIsOpen={() => setItemIdOpen(itemIdOpen === i ? null : i)}/>)}
        </div>
      </div>
    </div>
  )
}