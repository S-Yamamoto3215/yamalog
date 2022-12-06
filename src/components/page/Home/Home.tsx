import Image from 'next/image'
import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'

import { Button } from '@/components/ui/Button'
import { HomeHero } from '@/components/ui/Hero'
import { Container, Section } from '@/components/ui/Layout'
import { List } from '@/components/ui/List'

import styles from './home.module.scss'

const profileItems = [
  '山元 彰也（Shoya Yamamoto）',
  '1991.7.21（31歳）',
  'スプラトゥーン、アクアリウム、ジャニーズ',
]

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <HomeHero />
      <Section>
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
              <Button href={'#'} text={'Read more'} />
            </div>
            <div className={styles.home_about_content}>
              <h3 className={styles.home_about_content_headline}>
                <FaRegUser />
                <span className={styles.home_about_content_headline_text}>
                  プロフィール
                </span>
              </h3>
              <List items={profileItems} />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className={styles.section_title}>ブログ</h2>
        </Container>
      </Section>
    </div>
  )
}
