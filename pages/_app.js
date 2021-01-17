import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Layout from '../layouts/Layout'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
