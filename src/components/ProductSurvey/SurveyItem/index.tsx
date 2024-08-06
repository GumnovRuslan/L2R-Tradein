'use client'
import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react';
import classnames from '@/utils/classnames';

interface IProps {
  number: number
  question: string
  answer?: string
}

export function SurveyItem({number, question}: IProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);


  return (
    <div className={classnames(styles.item, isOpen ? styles.item_open : '')}>
      <button type='button' className={styles.item__header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.item__number}>{number}</span>
        <span className={styles.item__question}>{question}</span>
      </button>
      <div className={styles.item__content} ref={contentRef}>
        hello
      </div>
    </div>
  )
}