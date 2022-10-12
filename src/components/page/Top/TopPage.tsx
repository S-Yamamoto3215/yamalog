import Head from 'next/head'
import { FC } from 'react'
import { Top } from './Top'
import { Layout } from '@/components/ui/Layout'

export const TopPage: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Top />
      </Layout>
    </>
  )
}
