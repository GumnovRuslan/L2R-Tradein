'use client'

import data from './data'
import { UserIcon, Basket } from "../Icons";
import { Menu } from "@/components/Menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './styles.module.scss'

export function Header() {
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

  return (
    <>
    <header className={styles["header"]}>
      <div className={styles["header__inner"]}>
        <div className={styles["header__container"]} style={{height: headerHeight}}>
          <div className={styles['header__navs']}>
            <nav className={styles["header__nav"]}>
              {data.categories.map((el, i) => 
              <Link 
                href="/catalog" 
                className={`${styles["header__link"]} ${selectedLink === i+1 && styles['header__link--select']}`} 
                key={i} 
                onMouseEnter={() => openMenu(++i)}
                onClick={() => closeMenu()}>
                {el.title}
              </Link>)}
            </nav>
            <nav className={styles["header__nav"]}>
              {data.nav.map((el, i) => <Link href="#" className={styles["header__link"]} key={i}>{el}</Link>)}
            </nav>
          </div>
          
          <span className={styles["header__logo"]}>
            <a href="/" className={styles['header__logo-inner']}></a>
          </span>

          <div className={styles['header__icons']}>
            <button type="button" className={styles['header__icon']}>
              <UserIcon/>
            </button>
            <button type="button" className={styles['header__icon']}>
              <Basket/>
            </button>
          </div>

        </div>
        <Menu selectBrand={selectedLink} isOpen={menuIsOpen} setIsOpen={closeMenu}/>
      </div>
    </header>
    <div className={`${styles['background']} ${menuIsOpen && styles['background--visible']}`}></div>
    </>
  )
}