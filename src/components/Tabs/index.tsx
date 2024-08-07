'use client'
import styles from './styles.module.scss'
import { ChevronLeft, ChevronRight } from '../Icons'
import { useEffect, useRef, useState } from 'react'
import classnames from '@/utils/classnames'


export function Tabs() {
  const [activTabId, setActivTabId] = useState<null | number>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

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

  useEffect(() => {
    if (contentRef.current)
      contentRef.current.style.maxHeight = Number.isInteger(activTabId) ? `${contentRef.current.scrollHeight}px` : '0px';

  }, [activTabId])

  const btnNext = () => {
    if (!Number.isInteger(activTabId) || activTabId === tabs.length-1) setActivTabId(0)
    else if(activTabId != null) setActivTabId(activTabId+1)

  }

  const btnPrev = () => {
    if (!Number.isInteger(activTabId) || activTabId === 0) setActivTabId(tabs.length-1)
    else if(activTabId != null) setActivTabId(activTabId-1)
  }

  const handlerClick = (index: number) => {
    if(index === activTabId) setActivTabId(null)
    else setActivTabId(index)
  }

  return (
    <section className={styles.tabs}>
      <div className={styles.tabs__inner}>
      <button type='button' className={styles.tabs__btn} onClick={btnPrev}><ChevronLeft/></button>
      <button type='button' className={styles.tabs__btn} onClick={btnNext}><ChevronRight/></button>

        <div className={styles.tabs__header}>
          {tabs.map((tab, i) => 
          <button type='button' 
          className={classnames(styles.tabs__header_tab, activTabId == i ? styles.tabs__header_tab_active : '')} 
          onClick={() => handlerClick(i)}
          key={i}>{tab.title}</button>)}
        </div>

        <div className={styles.tabs__content} ref={contentRef}>
          <div className={styles.tabs__content_inner}>
            <p className={styles.tabs__content_title}>{tabs[activTabId || 0].title}</p>
            <div className={styles.tabs__content_main}>
              {tabs[activTabId || 0].text.map((el, i) => <p className={styles.tabs__content_text} key={i}>{el}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}