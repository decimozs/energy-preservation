import React from 'react'
import { Playfair_Display } from 'next/font/google'

const headerFont = Playfair_Display({ subsets: ['latin-ext']})

const Header: React.FC = () => {
  return (
    <header className='w-full max-w-[240px] lg:fixed lg:top-0 lg:left-0 lg:p-[1rem]'>
      <h1 className={`${headerFont.className} font-bold text-[2rem] mb-[0.5rem]`}>environ</h1>
      <p>An academic multimodal advocacy campaign for environmental preservation.</p>
    </header>
  )
}

export default Header