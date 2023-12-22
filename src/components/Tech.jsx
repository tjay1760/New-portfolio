import React from 'react';
import { BallCanvas } from './canvas';
import { technologies, softSkills } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../style';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Know</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon}/>
          </div>
        ))}
      </div>
      <h2 className={`mt-5 ${styles.sectionHeadText}`}>Soft Skills.</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {softSkills.map((skill, index) => (
          <div className='border-2 border-violet-400 rounded-xl text-white p-4 m-2 hover:bg-slate-900' key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech,"");
