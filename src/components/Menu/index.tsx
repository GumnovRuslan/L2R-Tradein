import styles from './styles.module.scss'
import { PriceTracker } from '@/components/PriceTracker'
import data from '../Header/data'

interface Props {
  selectBrand: number
  isOpen: boolean
  setIsOpen: (bol: boolean) => void
}

export function Menu({selectBrand, isOpen, setIsOpen}: Props) {
  const popylar = Array.from({length: 8}).map((_, i)=> `${data.categories[selectBrand-1]?.product} ${i}`)

  return (
    <div className={`${styles["menu"]} ${isOpen ? styles["menu--visible"] : ''}`} onMouseLeave={() => setIsOpen(false)} >
      <div className={styles["menu__inner"]}>
        <p className={styles["menu__title"]}>Choose your brand</p>
        <div className={styles["menu__brands"]}>
          {data.brands.map((el: string, i) => <a href="#" className={styles["menu__brand"]} key={i}>{el}</a>)}
        </div>
        <div className={styles["menu__content"]}>
          <div className={styles["menu__models-list"]}>
            <p className={styles["menu__content-title"]}>Hot rigth now</p>
            <div className={styles["menu__content-items"]}>
              {popylar.map((el, i)=> <a href="#" className={styles["menu__content-item"]} key={i}>{el}</a>)}
            </div>
          </div>

          <div className={styles["menu__brands-list"]}>
            <p className={styles["menu__content-title"]}>Brands</p>
            <div className={styles["menu__brands-items"]}>
              {data.brands.map((el: string, i) => <a href="#" className={styles["menu__content-item"]} key={i}>{el}</a>)}
            </div>
          </div>

          <div className={styles["menu__categories-list"]}>
            <p className={styles["menu__content-title"]}>categories</p>
            <div className={styles["menu__categories-items"]}>
              {data.categories.map((el, i) => <a href="#" className={`${styles["menu__content-item"]} ${selectBrand == i+1 && styles["menu__content-item--select"]}`} key={i}>{el.title}</a>)}
            </div>
          </div>
        </div>
        <PriceTracker section='full'/>
      </div>
    </div>    
  )
}