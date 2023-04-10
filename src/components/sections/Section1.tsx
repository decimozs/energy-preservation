import React from 'react'
import { p1 } from '../../../public/images'
import { Section } from '../shared'

const Section1: React.FC = () => {
  return (
    <Section layers='01' title='3RS of Sustainability' image={p1} alt="p1-img" headerStyles='xl:mr-[21rem] 2xl:mr-[37rem]' >
      <div className='flex flex-col gap-2'>
        <p className='xl:w-[950px] xl:font-medium xl:text-[2.3rem] 2xl:w-[1200px]'>Reduce, Reuse, and Recycle (or the 3Rs) are crucial for environmental preservation because they encourage sustainable and ethical production and consumption methods that help protect natural resources, lessen waste and pollution, and lessen the damaging effects of human activity on the environment.</p>

        <div className='flex flex-col gap-2 xl:flex-row xl:gap-12 xl:mt-[1rem]'>
          <p className='xl:w-[280px] 2xl:w-[400px]'><span className='font-bold'>Waste reduction</span>: The first 3R is to reduce waste. We can conserve natural resources and reduce the amount of waste that ends up in landfills or pollutes our environment by minimizing the resources we use and the waste we produce.</p>

          <p className='xl:w-[280px] 2xl:w-[400px]'><span className='font-bold'>Reusing products</span>: The second phase in the 3Rs is to reuse products. By reusing products or materials, we can increase their useful lives and lessen the demand for new products, which lowers the energy, water, and other resources required to produce new products.</p>

          <p className='xl:w-[280px] 2xl:w-[300px]'><span className='font-bold'>Recyclables</span>: The third 3Rs principle is recycling. Waste can be kept out of landfills and the amount of pollution it causes can be decreased by recycling things. Recycling also conserves natural resources because it eliminates the need to mine and refine new materials.</p>
        </div>
      </div>
    </Section>
  )
}

export default Section1