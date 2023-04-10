import React from 'react'
import { Playfair_Display } from 'next/font/google'

interface ImageProps {
  title : string
}

const headerFont = Playfair_Display({ subsets: ['latin-ext']})

const Title: React.FC <ImageProps> = ({title}) => {
  return (
    <div className={`${headerFont.className}  xl:mr-[7rem] 2xl:mr-[23rem]`}>
        <p className='font-bold text-[2rem] text-right xl:text-[4rem]'>{title}</p>
    </div>
  )
}

export default Title