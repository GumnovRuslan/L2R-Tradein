'use client'

import data from './data'
import { UserIcon, Basket } from "../Icons";
import { Menu } from "@/components/Menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './styles.module.scss'
import { BasketMenu } from '../Basket';
import classnames from '@/utils/classnames';

export function Header() {
  const [basketIsOpen, setBasketIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(90);
  const [selectedLink, setSelectedLink] = useState(0)

  useEffect(() => {
    const handleScroll = () => setHeaderHeight(window.scrollY >= 150 ? 60 : 90)
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const openMenu = (index: number) => {
    setMenuIsOpen(true)
    setSelectedLink(index)
  } 

  const closeMenu = () => {
    setMenuIsOpen(false)
    setSelectedLink(0)
  }

  const openBasket = () => {
    setBasketIsOpen(true)
  }

  return (
    <>
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__container} style={{height: headerHeight}}>
          <div className={styles.header__navs}>
            <nav className={styles.header__nav}>
              {data.categories.map((el, i) => 
              <Link href={`/catalog/${el.title.toLowerCase()}`} 
                className={classnames(styles.header__link, selectedLink === i+1 && styles.header__link_select)} 
                key={i} 
                onMouseEnter={() => openMenu(++i)}
                onClick={() => closeMenu()}>
                {el.title}
              </Link>)}
            </nav>
            <nav className={styles.header__nav}>
              {data.nav.map((el, i) => <Link href="#" className={styles.header__link} key={i}>{el}</Link>)}
            </nav>
          </div>
          
          <span className={styles["header__logo"]}>
            <Link href="/" className={styles.header__logo_inner}></Link>
          </span>

          <div className={styles['header__icons']}>
            <button type="button" className={styles.header__icon}>
              <UserIcon/>
            </button>
            <button type="button" className={styles.header__icon} onClick={openBasket}>
              <Basket/>
            </button>
          </div>

        </div>
        <Menu selectBrand={selectedLink} isOpen={menuIsOpen} setIsOpen={closeMenu}/>
      </div>
    </header>
    <div className={classnames(styles.background, menuIsOpen || basketIsOpen ? styles.background_visible : '')} style={{zIndex: basketIsOpen ? 3 : 2}}></div>
    <BasketMenu isOpen={basketIsOpen} setIsOpen={(bool) => setBasketIsOpen(bool)}/>
    </>
  )
}