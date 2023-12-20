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
<form
// ref={formRef}
onSubmit = {handleSubmit}
className = 'mt-12 flex flex-col gap-8'
>
<label className= "flex flex-col">
  <span className="text-white font-medium mb-4">Your Name: </span>
  <input 
  type="text"
  name="name" 
  value={form.name} 
  placeholder='What is your name?'
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
  />
</label>
<label className= "flex flex-col">
  <span className="text-white font-medium mb-4">Your Email: </span>
  <input 
  type="email"
  name="email" 
  value={form.email} 
  placeholder='What is your email?'
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
  />
</label>
<label className= "flex flex-col">
  <span className="text-white font-medium mb-4">Your Name: </span>
  <textarea
  rows ='7' 
  name="message" 
  value={form.message} 
  placeholder='What do yo want to say?'
  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
  />
</label>
<button
type='submit'
className='text-white mt-5 bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary border-none rounded-xl'
>
  {loading? "Sending" : "Send"}
</button>
</form>
      </motion.div>
      <motion.div
      variants ={slideIn('right','tween',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")