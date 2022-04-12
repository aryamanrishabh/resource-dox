import type { NextPage } from 'next'
import { ArrowDown, Download } from 'ih-resources-beta'

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-16 lg:flex-row">
      <div className="flex flex-col items-center text-center italic lg:w-1/2 lg:text-lg">
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
        <img
          className="mt-4 h-12 w-12 lg:h-16 lg:w-16"
          src="/assets/puke.png"
        />
      </div>
      <div className="flex flex-col items-center text-center italic lg:w-1/2 lg:text-lg">
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
        <img
          className="mt-4 h-12 w-12 lg:h-16 lg:w-16"
          src="/assets/party.png"
        />
      </div>
    </div>
  )
}

export default Home
