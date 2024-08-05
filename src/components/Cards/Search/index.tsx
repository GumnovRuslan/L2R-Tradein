import styles from './styles.module.scss'

export function SearchCard() {
  return (
    <div className={styles.search}>
      <div className={styles.search__inner}>
        <p className={styles.search__title}>Can’t see your mobile?</p>
        <p className={styles.search__description}>You can search for the make and model below</p>
        <input type="text" className={styles.search__input}  placeholder='Search for your Apple model'/>
      </div>
    </div>
  )
}