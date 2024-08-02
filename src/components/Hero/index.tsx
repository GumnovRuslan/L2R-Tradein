import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__inner']}>
        <div className={styles['hero__header']}>
          <p className={styles['hero__header-text']}>Mobile.</p>
          <p className={styles['hero__header-text']}>Tablets.</p>
          <p className={styles['hero__header-text']}>Wearables.</p>
        </div>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content-inner']}>
            <p className={styles['hero__content-title']}>Time for a refresh or <br/> clearing the clutter?</p>
            <p className={styles['hero__content-text']}>Get a price for your preloved tech now</p>
            <input type="text" className={styles['hero__content-input']} placeholder='Enter here'/>
            <p className={styles['hero__content-subtitle']}>TEXT <span>‘TRADEIN’</span> TO <span>55555</span></p>
            <p className={styles['hero__content-text']}>Get a price for your preloved tech now</p>
          </div>
        </div>  
      </div>
    </section>
  )
}