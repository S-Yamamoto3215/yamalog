import Image from 'next/image'
import { FC } from 'react'

import styles from './home-hero.module.scss'

export const HomeHero: FC = () => {
  return (
    <section className={styles.home_hero}>
      <div className={styles.home_hero_container}>
        <h1 className={styles.home_hero_title}>やまログ</h1>
        <div className={styles.home_hero_image}>
          <Image
            src='/images/home/hero.png'
            width={300}
            height={300}
            alt='ノートパソコンのイラスト'
          />
        </div>
        <p className={styles.home_hero_lead}>
          webエンジニア やまもんのポートフォリオです。
        </p>
      </div>
    </section>
  )
}
