import { FC } from 'react'

import styles from './list.module.scss'
import { ListItem } from './ListItem'

export const List: FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  )
}
