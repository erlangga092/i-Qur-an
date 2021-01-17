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
      <Link href='/surah/[slug]' as={`surah/${surah.number}`}>
        <div className="surah__list p-5 text-gray-700 rounded border-gray-300 border hover:border-blue-700 shadow-sm grid grid-cols-2 bg-white cursor-pointer">
          <div className="surah__list__left w-full">
            <p className="text-md">{surah.number}</p>
            <li className="text-md">{surah.name.transliteration.id}</li>
            <p className="text-md">{sliceText}</p>
          </div>
          <div className="surah__list__right flex justify-end items-center">
            <p className="text-3xl">{surah.name.short}</p>
          </div>

          <style jsx>{`
            * {
              box-sizing: border-box;
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