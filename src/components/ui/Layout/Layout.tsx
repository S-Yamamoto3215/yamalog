import { FC, ReactNode } from 'react'

import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'

import styles from './layout.module.scss'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
