import type { NextPage } from 'next'
import Head from 'next/head'
import { ArrowDown, Download } from 'ih-resources-beta'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full items-center">
        <div className="flex w-1/2 flex-col items-center text-lg italic">
          <span>Download SVG</span>
          <ArrowDown />
          <span>Import SVG / fill in the path to SVG</span>
          <ArrowDown />
          <span>Be limited to the downloaded SVG</span>
          <ArrowDown />
          <span>Need to customise SVG?</span>
          <ArrowDown />
          <span>Download SVG</span>
          <ArrowDown />
          <span>Import SVG / fill in the path to SVG</span>
          <ArrowDown />
          <span>Be limited to the downloaded SVG</span>
          <ArrowDown />
          <span>Need to customise SVG?</span>
          <ArrowDown />
          <span className="not-italic text-red-500">
            ERR!! Max stack depth reached
          </span>
          <img className="mt-4 h-16 w-16" src="/assets/puke.png" />
        </div>
        <div className="flex w-1/2 flex-col items-center text-lg italic">
          <span>npm i ih-resources-beta / yarn add ih-resources-beta</span>
          <ArrowDown />
          <span>Import SVG</span>
          <ArrowDown />
          <span>Need to customise SVG?</span>
          <ArrowDown />
          <span>Just pass in different props</span>
          <ArrowDown />
          <span className="not-italic text-green-500">
            EVENT!! Compiled successfully in 69ms
          </span>
          <img className="mt-4 h-16 w-16" src="/assets/party.png" />
        </div>
      </div>
    </div>
  )
}

export default Home
