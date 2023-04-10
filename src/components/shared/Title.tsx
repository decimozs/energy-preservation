import React from 'react'
import { Playfair_Display } from 'next/font/google'

const headerFont = Playfair_Display({ subsets: ['latin-ext']})

const Title = () => {
  return (
    <div className={`${headerFont.className}`}>
        <p className='font-bold text-[2rem] text-right'>Environmental Preservation</p>
    </div>
  )
}

export default Title