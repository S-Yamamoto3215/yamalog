import { FC } from 'react'
import { FaBars } from 'react-icons/fa'

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>yamalog</h1>
      <div className={styles.iconWrap}>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  )
}
