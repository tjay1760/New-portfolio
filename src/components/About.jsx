import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
const About = () => {
  return (
<>
<motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>
<motion.p
variants={fadeIn("","",0.1,1)}
>
An Full stack developer crafting great web experiences with Javascript, HTML5, CSS3 Typescript, Ruby, Python 
and javascript libraries and frameworks such as react, three.js, node.js and framer motion. 
I'm all about making web magic happen! ✨ Let's team up and bring your projects to life in the most delightful way possible. 🌟
</motion.p>
</>
  )
}

export default About;