import { FC, ReactNode } from 'react'

import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
