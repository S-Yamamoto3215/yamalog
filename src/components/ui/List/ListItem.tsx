import { FC, ReactNode } from 'react'
import { FaCheck } from 'react-icons/fa'

import styles from './list.module.scss'

export const ListItem: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <li className={styles.list_item}>
      <FaCheck className={styles.list_item_icon} />
      {children}
    </li>
  )
}
