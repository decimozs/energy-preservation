import React from 'react'
import { Header, Title } from '../shared'
import Image from 'next/image'
import { header } from '../../../public/images'

const HomeSection = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <Header/>
      <div className='mt-auto flex flex-col items-end'>
        <span className='text-[3rem] font-light mb-[1rem] lg:absolute lg:bottom-[1rem] lg:left-[1rem] lg:text-[6rem]'>01</span>
        <Title/>
        <div className='my-[1rem] relative w-full h-[400px] xl:h-[560px] xl:w-[950px]'>
          <Image src={header} alt="header-img" layout='fill'></Image>
        </div>
      </div>
    </section>
  )
}

export default HomeSection