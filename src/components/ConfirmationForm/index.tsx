'use client'
import styles from './styles.module.scss'
import Link from 'next/link'
import { CheckMark } from '../Icons'
import { useState } from 'react'
import classnames from '@/utils/classnames'
import { Button } from '../Button'

export function Form() {
  const [isChecket, setIsChecket] = useState({
    checkbox1: false,
    checkbox2: false,
  })

  const handlerChecked = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setIsChecket((prevState) => ({
      ...prevState,
      [name]: e.target.checked
    }));
  }

  return (
    <div className={styles.page}>
      <div className={styles.page__inner}>
        <Link href='/' className={styles.logo}></Link>
        <form className={styles.form}>
          <div className={styles.form__contact}>
            <div className={styles.form__header}>
              <span className={styles.form__title}>Contact</span>
              <div className={styles.form__header_login}>
                <span className={styles.form__text}>Have an account?</span>
                <Link href='#' className={styles.form__link}>Log in</Link>
              </div>
            </div>
            <input type="mail" className={classnames(styles.form__input, styles.form__input_email)} placeholder='Email'/>
            <label className={classnames(styles.form__label, styles.form__contact_label)}>
              {Checkbox(isChecket.checkbox1)}
              <input type="checkbox" className={styles.form__checkbox} onChange={(e) => handlerChecked(e, 'checkbox1')}/>
              <span className={styles.form__text}>Keep me up to date on news and exclusive offers from L2R</span>
            </label>
            <p className={styles.form__text}>Note: You can opt-out at any time. See our <Link href='#' className={styles.form__link}>Privacy & Cookies Policy.</Link></p>
          </div>
          <div className={styles.form__details}>
            <span className={styles.form__title}>Details</span>
            <div className={classnames(styles.form__delimiter, styles.form__delimiter_details)}>
              <input type="text" className={styles.form__input} placeholder='First name'/>
              <input type="text" className={styles.form__input} placeholder='Last name'/>
            </div>
            <input type="text" className={classnames(styles.form__input, styles.form__input_number)} placeholder='Contact number'/>
            <input type="text" className={styles.form__input} placeholder='Postcode'/>
          </div>
          <div className={styles.form__payment}>
            <span className={styles.form__title}>Payment</span>
            <div className={styles.form__wrapper}>
              <div className={styles.form__delimiter}>
                <Button type='primary' className={styles.form__btn}>Bank Transfer</Button>
                <Button type='primary' className={styles.form__btn}>Paypal</Button>
              </div>
              <input type="text" className={styles.form__input} placeholder='Customers full name'/>
              <input type="text" className={styles.form__input} placeholder='Account number'/>
              <input type="text" className={styles.form__input} placeholder='Sort Code'/>
            </div>
          </div>
          <div className={styles.form__delivery}>
            <span className={styles.form__title}>Delivery</span>
            <div className={styles.form__wrapper}>
              <div className={styles.form__delimiter}>
                <Button type='primary' className={styles.form__btn}>Drop Off</Button>
                <Button type='primary' className={styles.form__btn}>Royal Mail Collection</Button>
              </div>
            </div>
          </div>
          <div className={styles.form__save}>
            <span className={styles.form__title}>Save my details for future use</span>
            <div className={styles.form__input_password_wrapper}>
              <input type="text" className={classnames(styles.form__input, styles.form__input_password)} placeholder='Password'/>
            </div>
            <label className={classnames(styles.form__label, styles.form__contact_label)}>
              {Checkbox(isChecket.checkbox2)}
              <input type="checkbox" className={styles.form__checkbox} onChange={(e) => handlerChecked(e, 'checkbox2')}/>
              <p className={styles.form__text}>I have read and agree to the <Link href='#' className={styles.form__link}>terms and conditions.</Link></p>
            </label>
          </div>
          <Button type='primary' className={styles.form__btn_send}>TRADE-IN NOW</Button>
        </form>
      </div>
    </div>
  )
}

function Checkbox(isChecket: boolean) {
  return (
    <div className={classnames(styles.checkbox, isChecket ? styles.checkbox_checked : '')}>
      <span className={styles.checkbox__icon}>
        <CheckMark/>
      </span>
    </div>
  )
}