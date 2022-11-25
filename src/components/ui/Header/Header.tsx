import { FC } from 'react'

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <h1>yamalog</h1>
      </div>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_menu}>
          <li className={styles.header_nav_item}>About</li>
          <li className={styles.header_nav_item}>Blog</li>
          <li className={styles.header_nav_item}>Twitter</li>
          <li className={styles.header_nav_item}>GitHub</li>
          <li className={styles.header_nav_item}>Facebook</li>
        </ul>
      </nav>
    </header>
  )
}
