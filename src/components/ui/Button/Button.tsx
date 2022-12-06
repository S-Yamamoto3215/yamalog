import Link from 'next/link'
import { FC } from 'react'

import styles from './button.module.scss'

export const Button: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className={styles.btn}>
        <span className={styles.btn_text}>{text}</span>
      </a>
    </Link>
  )
}
