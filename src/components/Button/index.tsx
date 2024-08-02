import styles from './styles.module.scss'

interface Iprops {
  children: React.ReactNode
  link?: string
  style?: {[key: string]: string}
  hover?: boolean
  type: 'primary' | 'second'
}

export function Button({children, link, style, hover, type}: Iprops) {
  return (
    <>
    {link 
      ? <a href={link} className={`${styles['button']} ${styles[type]} ${hover && styles['button__hover-' + type]}`} style={style}>{children}</a> 
      : <button className={`${styles['button']} ${styles[type]} ${hover && styles['button__hover-' + type]}`} style={style}>{children}</button>}
    </>
  ) 
}