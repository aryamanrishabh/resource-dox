import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark flex min-h-screen flex-col">
      <Head>
        <title>ih-resources-beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="p-8">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
