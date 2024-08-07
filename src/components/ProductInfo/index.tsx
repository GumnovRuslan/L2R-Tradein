'use client'
import styles from './styles.module.scss'
import { Battery } from '../Icons'
import { ChevronRight } from '../Icons'
import { useEffect, useRef, useState } from 'react'
import classnames from '@/utils/classnames'

export function ProductInfo() {
  const [isOpen, setIsOpen] = useState(false)
  const infoContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(infoContentRef.current)
      infoContentRef.current.style.maxHeight = isOpen ? `${infoContentRef.current.scrollHeight}px` : '0px'

  }, [isOpen])

  const buttonText = isOpen ? "Close the lovely tech specs" : 'View all the lovely tech specs'
  const features = Array.from({length: 4}).map(el => ({image: <Battery/>, text: '48MP', description: '1179x2556 pixels'}))
  const characteristics = Array.from({length: 5})
  .map(_ => Array.from({length: +(Math.random()+'')[2] || 1})
    .map(_ => ({name: 'Network', description: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (Dual SIM model only) CDMA 800 / 1900 & TD-SCDMA'})))


  return (
    <div className={styles.info}>
      <div className={styles.info__inner}>
        <h2 className={styles.info__title}>All the technical stuff</h2>

        <div className={styles.feature}>
          <div className={styles.feature__inner}>
            <div className={styles.feature__items}>
              {features.map((el, i) => 
              <div className={styles.feature__item} key={i}>
                <div className={styles.feature__item_icon}>
                  {el.image}
                </div>
                <span className={styles.feature__item_text}>{el.text}</span>
                <span className={styles.feature__item_description}>{el.description}</span>
              </div>)}
            </div>
          </div>

          <div className={styles.characteristics} ref={infoContentRef}>
            <div className={styles.characteristics__inner}>
              <div className={styles.characteristics__items}>

                <div className={styles.characteristics__column}>
                  {characteristics.map((characteristic, i) => 
                  <div className={styles.characteristics__item} key={i}>
                    <h3 className={styles.characteristics__item_title}>Network</h3>
                    <div className={styles.characteristics__content}>
                      {characteristic.map((el, id) => 
                      <div className={styles.characteristics__line} key={id}>
                        <span className={styles.characteristics__line_subtitle}>{el.name}</span>
                        <span className={styles.characteristics__line_text}>{el.description}</span>
                      </div>
                      )}
                    </div>
                  </div>
                  )}
                </div>

                <div className={styles.characteristics__column}>
                  {characteristics.reverse().map((characteristic, i) => 
                  <div className={styles.characteristics__item} key={i}>
                    <h3 className={styles.characteristics__item_title}>Network</h3>
                    <div className={styles.characteristics__content}>
                      {characteristic.map((el, id) => 
                      <div className={styles.characteristics__line} key={id}>
                        <span className={styles.characteristics__line_subtitle}>{el.name}</span>
                        <span className={styles.characteristics__line_text}>{el.description}</span>
                      </div>
                      )}
                    </div>
                  </div>
                  )}

                </div>
              </div>
            </div>
          </div>
          
          <button type='button' className={styles.feature__info_button} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.feature__info_button_text}>{buttonText}</span>
            <span className={classnames(styles.feature__info_button_icon)} style={{transform: `rotate(${isOpen ? '90' : '0'}deg)`}}><ChevronRight/></span>
          </button>
        </div>
      </div>
    </div>
  )
}