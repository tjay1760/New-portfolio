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
    <div className="card_holder flex flex-col gap-4 rounded-3xl mt-3 items-start p-10 bg-black-200 hover:border hover:border-indigo-950 hover:scale-125">
      <div className="heading">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-extralight text-sm italic">{subtitle}</p>
      </div>
      <div className="price">
        <h1 className="font-bold text-3xl">{price}</h1>
      </div>
      <ul className="features">
        {features.map((feature, index)=><li key={index} className="flex gap-2 justify-start items-start p-1"><FaArrowAltCircleRight/>{feature}</li>)}
      </ul>
      {cta&&<button className="bg-slate-100 text-black-200 rounded-xl font-semibold px-4 py-2 w-full hover:bg-white hover:text-black">Get Started</button>}
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
      <div className="packages mt-5 flex justify-between">
{packages.map((pack, index)=><Card pack={pack} key={index}/>)}

      </div>
      
    </div>
  );
};

const PopularPackages = () =>{
return(
  <div className="popular-packages mt-20 ">
    <h1 className= {`${styles.sectionHeadText} flex items-center gap-4 `}> <GiStarFormation/> Popular Packages.</h1>
    <div className="packages flex justify-between">
    {popular_packages.map((pack, index)=> <Card pack={pack} key={index}/>)}
  </div>
  </div>
  
)
}

const MoreServices = (services) => {
const allServices = services.services
  return (
  <div className="more-services mt-20">
    <h1 className={`${styles.sectionHeadText} flex items-center gap-4 `}><FaPlus/>Additional Services.</h1>
<ul className="grid grid-cols-5 gap-4">
  {allServices.map ((service, index)=>
  <li key={index} className="flex flex-col gap-2 border bg-black-100 hover:bg-black hover:scale-105 border-gray-900 hover:border-gray-700 p-4 rounded-xl">
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
