import { FC, ReactNode } from 'react'

import styles from './section.module.scss'

export const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.section}>{children}</div>
}
