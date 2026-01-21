import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";
import { FaArrowAltCircleRight, FaGrinStars} from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { BsStack, BsWindow,BsCodeSquare } from "react-icons/bs";
import { rates, popular_packages, extraServices } from "../constants";



const icons = {
  "API Development": <BsCodeSquare />,
  "Full Stack Development": <BsStack />,
  "Frontend Development": <BsWindow />
};

const Card = ( pack) => {
  const {title,subtitle,price,features, cta} = pack.pack
  return (
    <div className="w-full bg-black-200 rounded-3xl p-5 md:p-8 flex flex-col gap-4 
                    transition-transform duration-300 hover:scale-[1.02] 
                    border border-transparent hover:border-indigo-950">
      
      <div>
        <h1 className="text-lg md:text-xl font-bold">{title}</h1>
        <p className="font-extralight text-sm italic">{subtitle}</p>
      </div>

      <h1 className="font-bold text-2xl md:text-3xl">{price}</h1>

      <ul className="flex flex-col gap-2 text-sm md:text-base">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2 items-start">
            <FaArrowAltCircleRight className="mt-1" />
            {feature}
          </li>
        ))}
      </ul>

      {cta && (
        <button className="bg-slate-100 text-black rounded-xl font-semibold px-4 py-2 w-full hover:bg-white">
          Get Started
        </button>
      )}
    </div>
  );
};
const Heading = (rate) => {
  const {category,description,hourlyRate,packages} = rate.rate
  return (
    <div className="header p-4 mt-10">
      <h1 className={`${styles.sectionSubText} flex gap-4 items-center p-1`}>{icons[category]} {category}</h1>
      <p className="mt-1 text-white text-[17px] max-w-3xl">
        {description}
      </p>
      <div className="packages mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

{packages.map((pack, index)=><Card pack={pack} key={index}/>)}

      </div>
      
    </div>
  );
};

const PopularPackages = () =>{
return(
  <div className="popular-packages mt-20 ">
    <h1 className= {`${styles.sectionHeadText} flex items-center gap-4 `}> <GiStarFormation/> Popular Packages.</h1>
   <div className="packages grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">

    {popular_packages.map((pack, index)=> <Card pack={pack} key={index}/>)}
  </div>
  </div>
  
)
}

const MoreServices = (services) => {
const allServices = services.services
  return (
  <div className="more-services mt-20">
    <h1 className={`${styles.sectionHeadText} flex items-center gap-4 `}><FaPlus/> Additional Services.</h1>
<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
  {allServices.map ((service, index)=>
  <li key={index} className="flex flex-col gap-2 border bg-black-100 hover:bg-black hover:scale-[1.02] 
               border-gray-900 hover:border-gray-700 p-4 md:p-6 rounded-xl transition-all">
    <p className="font-base">{service.title}</p>
    <p className='font-bold text-xl'>{service.priceRange}</p>
    <p className="italic">{service.description}</p>
  </li>  
  )}


</ul>

  </div>
)
} 

const RateCard = () => {  
  return (
    <motion.div variants={textVariant()}>
      <div>
        <h1 className={`${styles.sectionHeadText}`}>Rate Card.</h1>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Transparent pricing for quality development work. All prices in USD.
          Rates may vary based on project complexity and integrations.
        </motion.p>
      </div>
      <motion.div className="mt-10">  
        {rates.map((rate,index)=><Heading key ={index} rate = {rate} />)}
        

        <div className="cards"></div>
      </motion.div>
<PopularPackages/>
<MoreServices services ={extraServices}/>
    </motion.div>
  );
};

export default SectionWrapper(RateCard, "");
