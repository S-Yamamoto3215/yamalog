import { FC } from 'react'

import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <small className={styles.copy}>&copy; Shoya Yamamoto.</small>
    </footer>
  )
}
