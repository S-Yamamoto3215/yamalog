import { FC } from 'react'
import { FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa'

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <h1>yamalog</h1>
      </div>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_menu}>
          <li className={styles.header_nav_item}>私について</li>
          <li className={styles.header_nav_item}>ブログ</li>
          <li className={styles.header_nav_item}>
            <FaTwitter />
          </li>
          <li className={styles.header_nav_item}>
            <FaGithub />
          </li>
          <li className={styles.header_nav_item}>
            <FaFacebook />
          </li>
        </ul>
      </nav>
    </header>
  )
}
