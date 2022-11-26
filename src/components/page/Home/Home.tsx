import Image from 'next/image'
import { FC } from 'react'

import styles from './home.module.scss'

export const Home: FC = () => {
  return (
    <div className={styles.home}>
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
            webエンジニア yamamonのポートフォリオです。
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>私について</h2>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>ブログ</h2>
        </div>
      </section>
    </div>
  )
}
