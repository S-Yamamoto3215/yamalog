import Image from 'next/image'
import { FC } from 'react'

import styles from './home.module.scss'

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.home_hero}>
        <div className={styles.home_hero_container}>
          <h1 className={styles.home_hero_title}>YamaLog</h1>
          <div className={styles.home_hero_image}>
            <Image
              src='/images/home/hero.png'
              width={300}
              height={300}
              alt='ノートパソコンのイラスト'
            />
          </div>
          <p className={styles.home_hero_lead}>
            Web Developer Shoya Yamamoto&apos;s Portfolio.
          </p>
        </div>
      </section>
      <div>なにかコンテンツが入る</div>
    </div>
  )
}
