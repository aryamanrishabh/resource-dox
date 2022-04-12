import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-x-8 bg-gradient-to-b from-blue-300 to-indigo-400 px-8 py-4 font-mono text-white lg:gap-x-16">
      <Link href="/">
        <span className="cursor-pointer text-4xl font-bold tracking-wider">
          ih
        </span>
      </Link>
      <Link href="/assets">
        <span className="cursor-pointer text-lg font-semibold tracking-wide">
          ASSets
        </span>
      </Link>
    </div>
  )
}

export default Navbar
