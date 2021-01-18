import * as React from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

import SurahList from '../components/SurahList'

const API_URL: string = "https://api.quran.sutanlab.id/surah";

export default function Home({ surah }: InferGetStaticPropsType<typeof getStaticProps>) {
  const surahList = surah.data;

  return (
    <>
      <div className="home__app w-full">
        <Head>
          <title>i~Qur'an | Aplikasi Qur'an Online</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="home__app__list">
          <ul className="home__app__list__ul">
            {surahList && surahList.map((sur) => (
              <SurahList key={sur.number} surah={sur} />
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .home__app__list {
          @apply px-16 lm:px-2 sm:px-3;

          &__ul {
            @apply grid grid-cols-3 lm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5;
          }
        }
      `}</style>
    </>
  )
}5

export async function getStaticProps() {
  try {
    const res: Response = await fetch(API_URL)
    const resp = await res.json()
    return {
      props: {
        surah: resp
      }
    }
  } catch (err) {
    return {
      props: {
        error: err.message
      }
    }
  }
}