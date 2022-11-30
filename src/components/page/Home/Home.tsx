import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaRegUser, FaCheck } from 'react-icons/fa'

import { Container } from '@/components/ui/Layout'

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
            webエンジニア やまもんのポートフォリオです。
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <Container>
          <h2 className={styles.section_title}>私について</h2>
          <div className={styles.home_about}>
            <div className={styles.home_about_profile}>
              <div className={styles.home_about_profile_img}>
                <Image
                  src='/images/common/profile.jpg'
                  width={250}
                  height={250}
                  alt='やまもんのプロフィール画像'
                />
              </div>
              <p>
                親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から
              </p>
              <Link href={'#'}>
                <a className={styles.btn}>
                  <span className={styles.btn_text}>Read more</span>
                </a>
              </Link>
            </div>
            <div className={styles.home_about_content}>
              <h3 className={styles.home_about_content_headline}>
                <FaRegUser />
                <span className={styles.home_about_content_headline_text}>
                  プロフィール
                </span>
              </h3>
              <ul className={styles.list}>
                <li className={styles.list_item}>
                  <FaCheck className={styles.list_item_icon} />
                  山元 彰也（Shoya Yamamoto）
                </li>
                <li className={styles.list_item}>
                  <FaCheck className={styles.list_item_icon} />
                  1991.7.21（31歳）
                </li>
                <li className={styles.list_item}>
                  <FaCheck className={styles.list_item_icon} />
                  スプラトゥーン、アクアリウム、ジャニーズ
                </li>
                <li className={styles.list_item}></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.section}>
        <Container>
          <h2 className={styles.section_title}>ブログ</h2>
        </Container>
      </section>
    </div>
  )
}
