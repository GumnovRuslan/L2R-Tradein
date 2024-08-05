'use client'

import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import { useState } from 'react'

interface IProps {
  model: string

}

const questions = [
  {
    text: 'Have you removed your Google account from this device?'
  },
  {
    text: 'Please select your network'
  },
  {
    text: 'Is the device fully functional?'
  },
  {
    text: 'Does the device have any physical damage?'
  },
  {
    text: 'Is the device water damaged?'
  },
  {
    text: 'Does the device show signs of screen burn, missing or faded pixels? Does the device show signs of screen burn, missing or faded pixels?'
  },
]

export function ProductSurvey({model}: IProps) {
  const [questionIdOpen, setQuestionIdOpen] = useState<null | number>(null)

  return (
    <div className={styles.survey}>
      <div className={styles.survey__inner}>
        <h1 className={styles.survey__title}>{model}</h1>
        <form className={styles.survey__form}>
          <p className={styles.survey__subtitle}>If you’re ready, it’s time to ‘fess up with a few more details.</p>
          <div className={styles.survey__content}>
            {questions.map((question, i) => 
              <div className={classnames(styles.survey__question_item, questionIdOpen === i ? styles.survey__question_item_open : '')} key={i}>
                <label className={styles.survey__question_header} >
                  <input type="radio" name='question' className={styles.survey__question_checkbox} onChange={(e) => e.target.checked && setQuestionIdOpen(i)}/>
                  <span className={styles.survey__question_number}>{i+1}</span>
                  <span className={styles.survey__question_text}>{question.text}</span>
                </label>
                <div className={classnames(styles.survey__question_content)}>
                  hello
                </div>
            </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}