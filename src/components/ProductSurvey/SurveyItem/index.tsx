'use client'
import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react';
import classnames from '@/utils/classnames';
import Image from 'next/image';
import { Button } from '@/components/Button';

interface IAnswer {
  icon?: string
  text: string
}

interface IProps {
  answers: IAnswer[]
  isOpen: boolean
  setIsOpen: () => void
  number: number
  question: string
}

export function SurveyItem({isOpen, setIsOpen, number, question, answers}: IProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectAswer, setSelectAnwer] = useState<null | string>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);


  return (
    <div className={classnames(styles.item, isOpen ? styles.item_open : '')}>
      <button type='button' className={styles.item__header} onClick={() => setIsOpen()}>
        <span className={styles.item__number}>{number}</span>
        <div className={styles.item__header_content}>
          <span className={styles.item__question}>{question}</span>
          {selectAswer && <p className={styles.item__answer}>Answer: <span>{selectAswer}</span></p>}
        </div>
      </button>
      <div className={classnames(styles.item__content, isOpen ? styles.item__content_active : '')} ref={contentRef}>
        <div className={styles.item__content_inner}>
          {answers.map((answer,i) => (
            answer.icon 
            ? <button type='button' className={styles.item__content_answer} onClick={() => setSelectAnwer(answer.text)} key={i}>
              <Image src={answer.icon} alt='img' width={100} height={100}/>
            </button>
            : <button type='button' className={styles.item__content_answer_btn} onClick={() => setSelectAnwer(answer.text)} key={i}>
              {answer.text}
            </button>))}
        </div>
      </div>
    </div>
  )
}