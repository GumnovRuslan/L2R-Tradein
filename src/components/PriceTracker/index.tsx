import styles from './styles.module.scss';
import { Button } from '@/components/Button';
import Image from 'next/image';

interface IProps {
  section?: 'full'
  image?: {
    src: string,
    alt: string,
    width: string
  }
  height?: string
}

export function PriceTracker({image, height, section}: IProps) {
  return (
    <section className={`${styles['tracker']} ${section || ''}`}>
      <div className={styles['tracker__inner']} style={{height: height}}>
        {image && 
        <div className={styles['tracker__image-wrapper']} style={{width: image.width}}>
          <Image src='/image.jpg' alt='alt' fill={true} objectFit='cover'/>
        </div>}
        <div className={styles['tracker__content']}>
          <div className={styles['tracker__header']}>
            <p className={styles['tracker__title']}>Price Tracker.</p>
            <p className={styles['tracker__description']}>Track the price of your device with ongoing updates</p>
          </div>
          <form className={styles['tracker__form']}>
            <input type="text" className={styles['tracker__input']} placeholder='Search Make/Model'/>
            <input type="mail" className={styles['tracker__input']} placeholder='Email'/>
            <input type="text" className={styles['tracker__input']} placeholder='Mobile'/>
            <Button type='primary'>Track</Button>
          </form>
        </div>
      </div>
    </section>
  )
}