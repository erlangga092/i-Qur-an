import * as React from 'react'
import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Loading = dynamic(() => import('react-loading-animate'), { ssr: false })
import 'react-loading-animate/dist/main.css';

const API_URL_ID: string = 'https://api.quran.sutanlab.id/surah'

export default function SurahDetail(): JSX.Element {
  const [details, setDetails] = React.useState(null)
  const [error, setError] = React.useState(null)

  const router: NextRouter = useRouter()
  const slug: string | string[] = router.query.slug
  
  const fetchSurah = async (): Promise<void> => {
    try {
      const res: Response = await fetch(`${API_URL_ID}/${slug}`)
      const resp = await res.json()
      setDetails(resp.data)
    } catch (err) {
      setError(err.message)
    }
  }

  React.useEffect(() => {
    fetchSurah()
  }, [])

  return (
    <>
      <Head>
        {details ? (
          <title>{details.name.short} | {details.name.transliteration.id}</title>
        ) : (
          <title>Loading ..</title>
        )}
      </Head>
      <div className="surah__detail px-10 -mt-4 lm:px-3">
        {details ? details.verses.map((vers, index: number) => {
          return (
            <div className="p-8 border-b border-gray-200 shadow-sm my-2 bg-white lm:p-5" key={index}>
              <p className="text-4xl py-5 text-right text-gray-900 leading-10">{vers.text.arab}</p>
              <p className="text-left text-md text-gray-600 pb-5">{vers.translation.id}</p>
              {/* <audio controls controlsList="nodownload" style={{ width: '500px' }}>
                <source src={vers.audio.primary}/>
              </audio> */}
            </div>
          )
        }) : (
          <div className="surah__detail__loading w-full h-screen flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>

      <style jsx>{`
        .surah__detail {
          font-family: 'IBM Plex Mono';
        }
      `}</style>
    </>
  )
}

