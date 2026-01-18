import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Card = (level, price, features) => {
  return (
    <div className="card_holder flex flex-col gap-4 rounded-2xl mt-3 items-center p-2 bg-black-200">
      <div className="heading">
        <h1 className="text-xl font-bold">Basic API</h1>
        <p className="font-extralight text-sm italic">CRUD +Auth</p>
      </div>
      <div className="price">
        <h1 className="font-bold text-3xl">$250 – $450</h1>
      </div>
      <ul className="features">
        <li className="flex gap-2 justify-center items-center p-1"><FaArrowAltCircleRight/>API development</li>
        <li>API development</li>
        <li>API development</li>
        <li>API development</li>
      </ul>
    </div>
  );
};
const Heading = (heading, Description) => {
  return (
    <div className="header max-w-fit p-4">
      <h1 className={styles.sectionSubText}>API Development</h1>
      <p className="mt-1 text-white text-[17px] max-w-3xl">
        RESTful or GraphQL APIs with NodeJs, Ruby on Rails or Laravel
      </p>
      <Card />
    </div>
  );
};

const RateCard = () => {
  return (
    <motion.div variants={textVariant()}>
      <div>
        <h1 className={styles.sectionHeadText}>Rate Card.</h1>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Transparent pricing for quality development work. All prices in USD.
          Rates may vary based on project complexity and integrations.
        </motion.p>
      </div>
      <motion.div className="mt-10">
        <Heading />

        <div className="cards"></div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(RateCard, "");
