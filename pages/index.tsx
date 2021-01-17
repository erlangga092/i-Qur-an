import * as React from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

import SurahList from '../components/SurahList'

const API_URL: string = "https://api.quran.sutanlab.id/surah";

export default function Home({ surah }: InferGetStaticPropsType<typeof getStaticProps>) {
  const surahList = surah.data;

  return (
    <div className="app w-full">
      <Head>
        <title>i~Qur'an | Aplikasi Qur'an Online</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="list px-16">
        <ul className="grid grid-cols-3 gap-5">
          {surahList && surahList.map((sur) => (
            <SurahList key={sur.number} surah={sur} />
          ))}
        </ul>
      </div>
    </div>
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