'use client'

import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import { useState } from 'react'
import { SurveyItem } from './SurveyItem'

interface IProps {
  model: string

}

const questions = [
  {
    text: 'Have you removed your Google account from this device?',
    answer: ''
  },
  {
    text: 'Please select your network',
    answer: ''
  },
  {
    text: 'Is the device fully functional?',
    answer: ''
  },
  {
    text: 'Does the device have any physical damage?',
    answer: ''
  },
  {
    text: 'Is the device water damaged?',
    answer: ''
  },
  {
    text: 'Does the device show signs of screen burn, missing or faded pixels? Does the device show signs of screen burn, missing or faded pixels?',
    answer: ''
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
          <div className={styles.survey__items}>
            {questions.map((question, i) => <SurveyItem number={i+1} question={question.text} key={i}/>)}
          </div>
        </form>
      </div>
    </div>
  )
}