import styles from './styles.module.scss'
import classnames from '@/utils/classnames'

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
      ? <a href={link} className={classnames(styles.button, styles[type], hover ? styles['button__hover-' + type] : '', className)} style={style}>{children}</a> 
      : <button className={classnames(styles.button, styles[type], hover ? styles['button__hover-' + type] : '', className)} style={style}>{children}</button>}
    </>
  ) 
}