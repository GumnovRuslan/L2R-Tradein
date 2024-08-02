import styles from './styles.module.scss'
import { Button } from '../Button'

interface IProps {
  title: string
  description: string
  button: {
    style?: {[key: string]: string},
    inner: string,
    type: 'primary' | 'second',
  }
}

export function Block({button, title, description}: IProps) {
  return (
    <section className={styles['block']}>
      <div className={styles['block__inner']}>
        <h3 className={styles['block__title']}>{title}</h3>
        <p className={styles['block__description']}>{description}</p>
        <Button type={button.type} style={button.style}>{button.inner}</Button>
      </div>
    </section>
  )
}