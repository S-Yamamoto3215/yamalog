import { FC } from 'react'

import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; Shoya Yamamoto.</small>
    </footer>
  )
}
