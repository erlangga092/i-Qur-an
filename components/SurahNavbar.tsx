import Link from 'next/link'

const SurahNavbar = () => {
  return (
    <>
      <div className="surah__navbar w-screen">
        <nav className="surah__nav w-full t-0 l-0 fixed grid grid-cols-2 bg-white shadow-md py-6 px-16">
          <Link href='/'>
            <section className="surah__nav__left text-3xl cursor-pointer">i~Qur'an</section>
          </Link>
          <section className="surah__nav__right"></section>
        </nav>
      </div>

      <style jsx>{`
        .surah__navbar {
          font-family: 'IBM Plex Mono';
        }
      `}</style>
    </>
  )
}

export default SurahNavbar