import styles from './styles.module.scss'
import classnames from '@/utils/classnames'
import Link from 'next/link'

interface Iprops {
  children: React.ReactNode
  link?: string
  style?: {[key: string]: string}
  hover?: boolean
  type: 'primary' | 'second'
  className?: string
}

export function Button({children, link, style, hover, type, className}: Iprops) {
  return (
    <>
    {link 
      ? <Link href={link} className={classnames(styles.button, styles[type], hover ? styles['button__hover-' + type] : '', className)} style={style}>{children}</Link> 
      : <button className={classnames(styles.button, styles[type], hover ? styles['button__hover-' + type] : '', className)} style={style}>{children}</button>}
    </>
  ) 
}