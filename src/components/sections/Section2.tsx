import React from 'react'
import { Section } from '../shared'
import { p2 } from '../../../public/images'

const Section2: React.FC = () => {
  return (
    <Section layers='02' title='Conserve Energy' image={p2} alt='p2-img' classname='mt-[5rem]'>
      <div className='flex flex-col gap-2 xl:flex-row xl:gap-2'>
        <p className='xl:w-[335px] xl:font-medium xl:text-[2.3rem] 2xl:w-[580px]'>Because it lessens our impact on the environment and lessens the consequences of climate change, energy conservation is a crucial component of environmental preservation.</p>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2 xl:flex-row'>
          <p className='xl:w-[300px] xl:mt-[3rem] 2xl:mt-[0]'><span className='font-bold'>Reducing greenhouse gas emissions</span>: When burned, many energy sources, including coal, oil, and natural gas, generate greenhouse gases that contribute to climate change and global warming. We can minimize the amount of greenhouse gases we produce and limit the rate of climate change by conserving energy and using it more effectively.</p>

          <p className='xl:w-[300px] xl:mt-[3rem] 2xl:mt-[0]'><span className='font-bold'>Natural resource preservation</span>: Many energy sources, such as coal and oil, are limited and not renewable. We may lessen our reliance on these finite resources and contribute to their preservation for future generations by practicing energy conservation.</p>
          </div>

          <div className='flex flex-col gap-2 xl:flex-row'>
          <p className='xl:w-[300px] xl:mt-[2rem] 2xl:mt-[0]'><span className="font-bold">Improving air quality</span>: Pollutants are released into the atmosphere by a variety of energy sources, including coal-fired power stations. We can enhance air quality, lessen the harmful effects of energy production on human health and the environment, and use less energy by switching to cleaner energy sources.</p>

          <p className='xl:w-[300px] xl:mt-[2rem] 2xl:mt-[0]'><span className="font-bold">Using energy more effectively</span> can help you cut your energy costs and save money. This can be crucial for low-income households who may find it difficult to pay their high energy costs.</p>
          </div>
          
        </div>
      </div>
    </Section>
  )
}

export default Section2