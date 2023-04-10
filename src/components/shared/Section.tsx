import React, { Children } from 'react'
import { Playfair_Display } from 'next/font/google'
import { StaticImageData } from 'next/image';
import Image from 'next/image'

interface SectionProps{
    children ?: React.ReactNode
    title : String
    image: StaticImageData;
    alt: string;
    classname ?: string
    headerStyles ?: string
    layers ?: String
    layersStyles ?: string
}

const headerFont = Playfair_Display({ subsets: ['latin-ext']})

const Section: React.FC <SectionProps> = ({title, image, alt, classname, children, headerStyles, layers, layersStyles}) => {
  return (
    <section className={`${classname} flex flex-col w-full`}>
      <div className='mt-auto flex flex-col items-end'>
      <span className={`${layersStyles} z-10 my-[2rem] font-light text-[6rem] mr-auto lg:absolute lg:left-[20rem] lg:t-0 xl:mt-[5rem] xl:left-[17rem] 2xl:mt-0 2xl:left-[20rem]`}>{layers}</span>
        <div className={`${headerFont.className}  ${headerStyles}`}>
            <p className='font-bold text-[2rem] text-right xl:text-[4rem]'>{title}</p>
        </div>
        <div className='my-[1rem] relative w-full h-[400px] xl:h-[560px] xl:w-[950px] 2xl:w-[1200px] 2xl:h-[760px]'>
            <Image src={image.src} alt="src" layout='fill'></Image>
        </div>
            {children}
      </div>
    </section>
  )
}

export default Section