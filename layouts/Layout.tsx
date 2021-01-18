import SurahNavbar from '../components/SurahNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <SurahNavbar/>
      <div className="children">
        {children}
      </div>

      <style jsx>{`
        .children {
          padding-top: 7rem;
        }  

        @media screen and (max-width: 768px) {
          .children {
            padding-top: 5.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default Layout