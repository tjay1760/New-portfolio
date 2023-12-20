import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
{technologies.map(
  (tech, index)=>(
    <div className='w-28 h-28' key={tech.name}>
<BallCanvas icon={tech.icon}/>
    </div>
  )
)}
    </div>
  )
}

export default Tech