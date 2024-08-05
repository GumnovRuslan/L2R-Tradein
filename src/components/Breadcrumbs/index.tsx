import styles from './styles.module.scss'
import Link from 'next/link'

interface IPath {
  title: string
  href: string
}

interface IProps {
  paths: IPath[]
  title: string
}

export function Breadcrumbs({paths, title}: IProps) {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbs__paths}>
        {paths.map((path, i) => <Link href={`${path.href}`} className={styles.breadcrumbs__path} key={i}>{path.title}</Link>)}
      </div>
      <h1 className={styles.breadcrumbs__title}>{title}</h1>
    </div>
  )
}