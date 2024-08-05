import styles from './styles.module.scss'
import { Battery } from '../Icons'

export function ProductInfo() {
  const features = Array.from({length: 4})
  const characteristics = Array.from({length: 10}).map(_ => Array.from({length: +(Math.random()+'')[2] || 1}))

  return (
    <div className={styles.info}>
      <div className={styles.info__inner}>
        <h2 className={styles.info__title}>All the technical stuff</h2>
        <div className={styles.feature}>
          <div className={styles.feature__items}>
            {features.map((_, i) => 
            <div className={styles.feature__item} key={i}>
              <div className={styles.feature__item_icon}>
                <Battery/>
              </div>
              <span className={styles.feature__item_text}>48MP</span>
              <span className={styles.feature__item_description}>1179x2556 pixels</span>
            </div>)}
          </div>
        </div>
        <div className={styles.characteristics}>
          <div className={styles.characteristics__items}>

            {characteristics.map((characteristic, i) => 
            <div className={styles.characteristics__item} key={i}>
              <h3 className={styles.characteristics__item_title}>Network</h3>
              <div className={styles.characteristics__content}>
                {characteristic.map((_, id) => 
                <div className={styles.characteristics__line} key={id}>
                  <span className={styles.characteristics__line_subtitle}>Technology</span>
                  <span className={styles.characteristics__text}>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (Dual SIM model only) CDMA 800 / 1900 & TD-SCDMA</span>
                </div>
                )}
              </div>
            </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}