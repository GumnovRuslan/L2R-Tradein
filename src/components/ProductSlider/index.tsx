import styles from './styles.module.scss'
import Image from 'next/image'

export function ProductSlider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__inner}>
        <div className={styles.slider__image_wrapper}>
          <Image src={'/image.jpg'} fill={true} objectFit='cover' alt='product'/>
        </div>
      </div>
    </div>
  )
}