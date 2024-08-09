import data from '../Header/data';
import styles from './styles.module.scss';
import { NetworkFacebook, NetworkTwiter, Networkinstagram } from '../Icons';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <div className={styles['footer__columns']}>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>Help</p>
            <div className={styles['footer__column-items']}>
              <Link href="#" className={styles['footer__column-item']}>01603 000 000</Link>
              <Link href="#" className={styles['footer__column-item']}>Contact@l2r.com</Link>
            </div>
          </div>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>categories</p>
            <div className={styles['footer__column-items']}>
              {data.categories.map((el, i) => <Link href={"/catalog/"+ el.title.toLowerCase()} className={styles['footer__column-item']} key={i}>{el.title}</Link>)}
            </div>
          </div>
          <div className={styles['footer__column']}>
            <p className={styles['footer__column-title']}>Company</p>
            <div className={styles['footer__column-items']}>
              {data.nav.map((el, i) => <Link href="#" className={styles['footer__column-item']} key={i}>{el}</Link>)}
            </div>
          </div>
        </div>
        <div className={styles['footer__follow']}>
          <p className={styles['footer__column-title']}>follow us</p>
          <div className={styles['footer__networks']}>
            <Link href="#" className={styles['footer__network']}>
              <NetworkTwiter/>
            </Link>
            <Link href="#" className={styles['footer__network']}>
              <NetworkFacebook/>
            </Link>
            <Link href="#" className={styles['footer__network']}>
              <Networkinstagram/>
            </Link>
          </div>
        </div>
        <p className={styles['footer__copy']}>2024 L2R. All Rights Reserved</p>
      </div>
    </footer>
  )
}