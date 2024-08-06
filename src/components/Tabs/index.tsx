'use client'
import styles from './styles.module.scss'
import { ChevronLeft, ChevronRight } from '../Icons'
import { useState } from 'react'
import classnames from '@/utils/classnames'


export function Tabs() {
  const [activTabId, setActivTabId] = useState<null | number>(null)

  const tabs = [
    {
      title: 'How many devices can I recycle?',
      text: [
        'The International Mobile Equipment Identity (IMEI) number is the 15 digit serial number unique to every device that is able to connect to a cellular network such as a mobile, tablet or connected watch. Devices that are WiFi or Bluetooth only will not have an IMEI but will often have a serial number that is unique to the device.',
        'Click here to find your IMEI or Serial number',
      ],
    },
    {
      title: 'What is an IMEI or Serial Number?',
      text: [
        'The International Mobile Equipment Identity (IMEI) number is the 15 digit serial number unique to every device that is able to connect to a cellular network such as a mobile, tablet or connected watch. Devices that are WiFi or Bluetooth only will not have an IMEI but will often have a serial number that is unique to the device.',
        'Click here to find your IMEI or Serial number',
      ],
    },
    {
      title: 'My device is faulty, can I still use L2R?',
      text: [
        'The International Mobile Equipment Identity (IMEI) number is the 15 digit serial number unique to every device that is able to connect to a cellular network such as a mobile, tablet or connected watch. Devices that are WiFi or Bluetooth only will not have an IMEI but will often have a serial number that is unique to the device.',
        'Click here to find your IMEI or Serial number',
      ],
    },
    {
      title: 'What if my device is registered stolen or barred, will you accept it?',
      text: [
        'The International Mobile Equipment Identity (IMEI) number is the 15 digit serial number unique to every device that is able to connect to a cellular network such as a mobile, tablet or connected watch. Devices that are WiFi or Bluetooth only will not have an IMEI but will often have a serial number that is unique to the device.',
        'Click here to find your IMEI or Serial number',
      ],
    },
  ]

  const btnNext = () => {
    if (!Number.isInteger(activTabId) || activTabId === tabs.length-1) setActivTabId(0)
    else setActivTabId((activTabId+1))
  }

  const btnPrev = () => {
    if (!Number.isInteger(activTabId) || activTabId === 0) setActivTabId(tabs.length-1)
    else setActivTabId((activTabId-1))
  }

  return (
    <section className={styles.tabs}>
      <button type='button' className={styles.tabs__btn} onClick={btnPrev}><ChevronLeft/></button>
      <button type='button' className={styles.tabs__btn} onClick={btnNext}><ChevronRight/></button>
      <div className={styles.tabs__inner}>

        <div className={styles.tabs__header}>
          {tabs.map((tab, i) => 
          <button type='button' 
          className={classnames(styles.tabs__header_tab, activTabId == i ? styles.tabs__header_tab_active : '')} 
          onClick={() => setActivTabId(i)}
          key={i}>{tab.title}</button>)}
        </div>

        <div className={styles.tabs__content}>
          <p className={styles.tabs__content_title}>{tabs[activTabId || 0].title}</p>
          <p className={styles.tabs__content_text}>{tabs[activTabId || 0].text[0]}</p>
          <p className={styles.tabs__content_description}>{tabs[activTabId || 0].text[1]}</p>
        </div>
      </div>
    </section>
  )
}