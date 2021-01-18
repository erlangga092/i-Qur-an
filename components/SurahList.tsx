import * as React from 'react'
import Link from 'next/link'

const SurahList = ({ surah }) => {
  let [sliceText, setSliceText] = React.useState<string>()
  
  const surahTranslation = surah.name.translation.id

  React.useEffect(() => {
    if (surahTranslation.trim().length > 10) {
      const surahSlice = surahTranslation.slice(0, 9).trim().concat('..')
      setSliceText(surahSlice)
    } else {
      setSliceText(surahTranslation)
    }
  })

  return (
    <>
      {/* <Link href='/surah/[slug]' as={`surah/${surah.number}`}> */}
      <Link href={{ pathname: '/surah/[slug]', query: { slug: surah.number } }} as={`surah/${surah.number}`}>
        <div className="surah__list p-5 text-gray-600 rounded-md border-gray-300 border shadow-md grid grid-cols-2 bg-white cursor-pointer">
          <div className="surah__list__left w-full">
            <p className="text-md">{surah.number}</p>
            <li className="text-md">{surah.name.transliteration.id}</li>
            <p className="text-md">{sliceText}</p>
          </div>
          <div className="surah__list__right flex justify-end items-center">
            <p className="text-2xl text-green-700" style={{ fontFamily: 'me_quran' }}>{surah.name.short}</p>
          </div>

          <style jsx>{`
            * {
              box-sizing: border-box;
            }

            .surah__list {
              &:hover {
                border-radius: .375rem;
                box-shadow: 0 2px 0 rgba(54, 45, 89, .15),
                  -0.1875rem -0.1875rem 0 0.1875rem #f2b712,
                  0 0 0 0.375rem #e1567c;
              }
            }

            .surah__list__left,
            .surah__list__right {
              font-family: 'IBM Plex Mono';
            }
          `}</style>
        </div>
      </Link>
    </>
  )
}
export default SurahList