import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'
// import {emaijs} from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef;
  const [form,setForm] = useState({
name:"",
email:"",
message:""
  });
  const [loading, isLoading] = useState(false);
  const handleChange=()=>{
  }
  const handleSubmit =()=>{}
  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants ={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
<p className={styles.sectionSubText}>Get in Touch</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")