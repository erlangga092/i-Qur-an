import * as React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('react-loading-animate'), { ssr: false })
import 'react-loading-animate/dist/main.css';

const API_URL_ID: string = 'https://api.quran.sutanlab.id/surah'

export default function SurahDetail({ surah }): JSX.Element {
  return (
    <>
      <Head>
        {surah ? (
          <title>{surah.name.short} | {surah.name.transliteration.id}</title>
        ) : (
          <title>Loading ..</title>
        )}
      </Head>
      <div className="surah__detail">
        {surah ? surah.verses.map((vers, index: number) => {
          return (
            <div className="surah__detail__box" key={index}>
              <p className="surah__detail__box__arab">{vers.text.arab}</p>
              <p className="surah__detail__box__translation">{vers.translation.id}</p>
              {/* <audio controls controlsList="nodownload" className="z-10" style={{ width: '500px' }}>
                <source src={vers.audio.primary}/>
              </audio> */}
            </div>
          )
        }) : (
          <div className="surah__detail__loading">
            <Loading />
          </div>
        )}
      </div>

      <style jsx>{`
        .surah__detail {
          @apply px-10 -mt-4 lm:px-3;
          font-family: 'IBM Plex Mono';

          &__box {
            @apply p-8 border-b border-gray-200 shadow-sm my-2 bg-white lm:p-5;

            &__arab {
              @apply text-4xl py-5 text-right text-gray-900 leading-10;
            }

            &__translation {
              @apply text-left text-sm text-gray-600 pb-5;
            }
          }

          &__loading {
            @apply w-full h-screen flex items-center justify-center;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  let arr: number[] = []
  for (let i: number = 1; i <= 114; i++) {
    arr.push(i)
  }
  const paths = arr.map((ar) => {
    return {
      params: {
        slug: ar.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: {slug} }) {
  try {
    const res: Response = await fetch(`${API_URL_ID}/${slug}`)
    const resp = await res.json()
    return {
      props: {
        surah: resp.data
      }
    }
  } catch (err) {
    throw err
  } 
}
