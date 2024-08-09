import styles from './styles.module.scss'
import { Close, Basket } from '../Icons'
import { Button } from '../Button'
import { CardProductMini } from '../Cards/ProductMini'
import { PriceTrackerMini } from '../PriceTrackerMini'
import classnames from '@/utils/classnames'

interface IProps {
  isOpen: boolean
  setIsOpen: (bol: boolean) => void
}

export function BasketMenu({isOpen, setIsOpen}: IProps) {
  return (
    <div className={classnames(styles.basket, isOpen ? styles.basket_open : '')}>
      <div className={styles.basket__inner}>
        <div className={styles.basket__header}>
          <button type='button' className={styles.basket__btn_close} onClick={() => setIsOpen(false)}>
            <Close/>
          </button>
          <span className={styles.basket__header_text}>Congratulations! You are almost done.</span>
          <span className={styles.basket__icon_basket}>
            <Basket/>
          </span>
        </div>
        <div className={styles.basket__main}>
          <div className={styles.basket__main_items}>
            <CardProductMini/>
            <CardProductMini/>
            <CardProductMini/>
            <CardProductMini/>
            <CardProductMini/>
            <CardProductMini/>
          </div>
        </div>
        <div className={styles.basket__total}>
          <div className={styles.basket__total_lines}>
            <div className={styles.basket__total_line}>
              <span className={styles.basket__total_name}>Device Total</span>
              <span className={styles.basket__total_price}>£280.00</span>
            </div>
            <div className={styles.basket__total_line}>
              <span className={styles.basket__total_name}>Total Trade-In</span>
              <span className={styles.basket__total_price}>£280.00</span>
            </div>
          </div>
          <Button link='/placing' type='primary' className={styles.basket__total_btn}>CHECKOUT NOW</Button>
        </div>
        <PriceTrackerMini description='Track the price of your device with ongoing updates' model='Samsung Galaxy S22 Ultra 128BG'/>
      </div>
    </div>
  )
}