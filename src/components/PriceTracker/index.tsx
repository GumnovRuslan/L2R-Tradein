import styles from './styles.module.scss';
import { Button } from '@/components/Button';
import Image from 'next/image';
import classnames from '@/utils/classnames';

interface IProps {
  section?: 'full'
  image?: {
    src: string,
    alt: string,
    width: string
  }
  height?: string
  model?: string
  description?: string
}

export function PriceTracker({image, height, section, model, description}: IProps) {
  const descriptionDef = description ?? 'Track the price of your device with ongoing updates'
  return (
    <section className={`${styles['tracker']} ${section || ''}`}>
      <div className={classnames(styles.tracker__inner, image ? styles.tracker__secondary : '')}>
        {image && 
        <div className={styles['tracker__image-wrapper']} style={{width: image.width}}>
          <Image src='/image.jpg' alt='alt' fill={true} objectFit='cover'/>
        </div>}
        <div className={styles['tracker__content']}>
          <div className={styles['tracker__header']}>
            <p className={styles['tracker__title']}>Price Tracker.</p>
            <p className={styles['tracker__description']}>Track the price of your device with ongoing updates</p>
            {model && <p className={styles.tracker__model}>{model}</p>}
          </div>
          <form className={styles.tracker__form}>
            {!model && <input type="text" className={styles.tracker__input} placeholder='Search Make/Model'/>}
            <input type="mail" className={styles.tracker__input} placeholder='Email'/>
            <input type="text" className={styles.tracker__input} placeholder='Mobile'/>
            <Button type='primary'>Track</Button>
          </form>
          {model && <a href="#" className={styles.tracker__another}>Track another device?</a>}
        </div>
      </div>
    </section>
  )
}