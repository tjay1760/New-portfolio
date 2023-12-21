import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon})=>{
  return(
<Tilt className='w-[250px] mx-auto'>
  <motion.div
  variants = {fadeIn("right","spring", 0.5*index, 0.75)}
  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-15 min-h-[280px] flex justify-evenly items-center flex-col'
    >
<img src={icon} alt={title} 
className='w-16 h-16 object-contain'
/>
<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>


  </motion.div>
</Tilt>
  )
}
const About = () => {
  return (
<>
<motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>
<motion.p
variants={fadeIn("","",0.1,1)}
className='mt-4 text-secondary text-[17px] max-width-3-xl leading-[30px]'
>
A Full stack developer crafting great web experiences with Javascript, HTML5, CSS3 Typescript, Ruby, Python 
and javascript libraries and frameworks such as react, three.js, node.js and framer motion. 
<br/>
✨ Let&apos;s team up and bring your projects to life in the most delightful way possible. 🌟
</motion.p>
<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
</>
  )
}

export default SectionWrapper(About, 'about');