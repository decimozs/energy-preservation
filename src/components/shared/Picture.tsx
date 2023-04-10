import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface ImageProps {
  image: StaticImageData;
  alt: string;
}

const Picture: React.FC <ImageProps> = ({ image, alt }) => {
  return (
    <div className='my-[1rem] relative w-full h-[400px] xl:h-[560px] xl:w-[950px] 2xl:w-[1200px] 2xl:h-[760px]'>
        <Image src={image.src} alt="src" layout='fill'></Image>
    </div>
  )
}

export default Picture