import React from 'react'
import dynamic from 'next/dynamic'

const DynamicHomeSection = dynamic(() => import('../sections/HomeSection'))
const DynamicHomeSectionContext = dynamic(() => import('../sections/HomeSectionContext'))
const DynamicSection1 = dynamic(() => import('../sections/Section1'))
const DynamicSection2 = dynamic(() => import('../sections/Section2'))
const DynamicSection3 = dynamic(() => import('../sections/Section3'))
const DynamicSection4 = dynamic(() => import('../sections/Section4'))
const DynamicSection5 = dynamic(() => import('../sections/Section5'))
const Footer = dynamic(() => import('../sections/Footer'))


const Home = () => {
  return (
    <>
      <DynamicHomeSection/>
      <DynamicHomeSectionContext/>
      <DynamicSection1/>
      <DynamicSection2/>
      <DynamicSection3/>
      <DynamicSection4/>
      <DynamicSection5/>
      <Footer/>
    </>
  )
}

export default Home