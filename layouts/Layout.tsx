import SurahNavbar from '../components/SurahNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <SurahNavbar/>
      <div className="children pt-28">
        {children}
      </div>
    </>
  )
}

export default Layout