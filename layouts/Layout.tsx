import SurahNavbar from '../components/SurahNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <SurahNavbar/>
      <div className="children" style={{ paddingTop: '7rem' }}>
        {children}
      </div>
    </>
  )
}

export default Layout