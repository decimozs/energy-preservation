import React from 'react'
import { Section } from '../shared'
import { p3 } from '../../../public/images'

const Section3: React.FC = () => {
  return (
    <Section layers='03' title='Protect Water Resources' image={p3} alt='p3-img' headerStyles='xl:mr-[14.6rem] 2xl:mr-[30.2rem]' classname='mt-[5rem]' >
      <div className='flex flex-col gap-2 xl:flex-row'>

        <div className='flex flex-col gap-2 xl:mt-[2rem]'>
        <p className='xl:w-[300px] 2xl:ml-[3rem]'><span className="font-bold">Water conservation</span> is one strategy for safeguarding water resources. This entails conserving water and utilizing it more effectively. To save water, do simple things like mend leaking faucets, take shorter showers, and sweep sidewalks and driveways instead of using a hose.</p>

        <p className='xl:w-[300px] xl:mt-[2.6rem] xl:ml-[11rem] 2xl:ml-[13rem] 2xl:mt-[2rem]'><span className='font-bold'>Protecting water resources</span> also involves preserving natural water systems such as wetlands, rivers, and lakes. These ecosystems are essential for filtering pollutants and providing habitats for a wide range of plant and animal species.</p>

        <p className='xl:w-[540px] xl:font-light xl:text-[2.3rem] xl:mt-[2rem] 2xl:mr-[3rem] 2xl:w-[600px] 2xl:ml-[-4rem] 2xl:text-[1rem] '>Household hazardous waste should be disposed of appropriately, and chemicals <span className="font-bold xl:font-medium">shouldn&apos;t be dumped down the sink or into storm drains.</span></p>

        </div>
        <p className='xl:w-[400px] xl:mt-[2rem] xl:font-light xl:text-[2.3rem] 2xl:w-[550px]'><span className="font-bold xl:font-medium">All life depends on water</span>, which is a valuable resource that must be protected if the ecosystem is to be preserved. Making sure there is enough clean water available for people, animals, and plants to exist and grow involves conserving and protecting water resources.</p>
      </div>
    </Section>
  )
}

export default Section3