import styles from './styles.module.scss'
import { Form } from '@/components/ConfirmationForm'
import { Product } from '@/components/ProductConfirmation'

export function PlacingPage() {
  return (
    <div className={styles.page}>
      <Form/>
      <Product/>
    </div>
  )
}