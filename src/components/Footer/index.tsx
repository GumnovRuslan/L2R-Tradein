import data from '../Header/data';
import styles from './styles.module.scss';
import { NetworkFacebook, NetworkTwiter, Networkinstagram } from '../Icons';

export function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <div className={styles['footer__columns']}>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>Help</p>
            <div className={styles['footer__column-items']}>
              <a href="#" className={styles['footer__column-item']}>01603 000 000</a>
              <a href="#" className={styles['footer__column-item']}>Contact@l2r.com</a>
            </div>
          </div>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>categories</p>
            <div className={styles['footer__column-items']}>
              {data.categories.map((el, i) => <a href="#" className={styles['footer__column-item']} key={i}>{el.title}</a>)}
            </div>
          </div>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>Company</p>
            <div className={styles['footer__column-items']}>
              {data.nav.map((el, i) => <a href="#" className={styles['footer__column-item']} key={i}>{el}</a>)}
            </div>
          </div>
        </div>
        <div className={styles['footer__follow']}>
          <p className={styles['footer__column-title']}>follow us</p>
          <div className={styles['footer__networks']}>
            <a href="#" className={styles['footer__network']}>
              <NetworkTwiter/>
            </a>
            <a href="#" className={styles['footer__network']}>
              <NetworkFacebook/>
            </a>
            <a href="#" className={styles['footer__network']}>
              <Networkinstagram/>
            </a>
          </div>
        </div>
        <p className={styles['footer__copy']}>2024 L2R. All Rights Reserved</p>
      </div>
    </footer>
  )
}