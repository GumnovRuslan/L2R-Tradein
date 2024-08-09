'use client'
import styles from './styles.module.scss'
import { useState } from 'react'
import { SurveyItem } from './SurveyItem'

interface IProps {
  model: string
}

const questions = [
  {
    question: 'Have you removed your Google account from this device?',
    answer: [{text: 'yes'}, {text: 'no'}]
  },
  {
    question: 'Please select your network',
    answer: [{icon: '/image.jpg', text: 'blabla0'}, 
      {icon: '/image.jpg', text: 'blabla1'}, 
      {icon: '/image.jpg', text: 'blabla2'},
      {icon: '/image.jpg', text: 'blabla3'},
      {icon: '/image.jpg', text: 'blabla4'}]
  },
  {
    question: 'Is the device fully functional?',
    answer: [{text: 'yes'}, {text: 'no'}]
  },
  {
    question: 'Does the device have any physical damage?',
    answer: [{text: 'yes'}, {text: 'no'}]
  },
  {
    question: 'Is the device water damaged?',
    answer: [{text: 'yes'}, {text: 'no'}]
  },
  {
    question: 'Does the device show signs of screen burn, missing or faded pixels? Does the device show signs of screen burn, missing or faded pixels?',
    answer: [{text: 'yes'}, {text: 'nosdfsdfsdfsdfsfasfasf'}]
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
            {questions.map((question, i) => <SurveyItem isOpen={questionIdOpen == i} setIsOpen={() => setQuestionIdOpen(questionIdOpen == i ? null : i)} number={i+1} question={question.question} answers={question.answer} key={i}/>)}
          </div>
        </form>
      </div>
    </div>
  )
}