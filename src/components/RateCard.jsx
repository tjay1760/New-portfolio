import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";

const Card = (level, price, features) => {
  return (
    <div className="card_holder">
      <div className="heading">
        <h1 className="text-xl font-bold">Basic API</h1>
        <p className="font-extralight">CRUD +Auth</p>
      </div>
      <div className="price">
        <h1>$250 – $450</h1>
      </div>
      <ul className="features">
        <li>API development</li>
        <li>API development</li>
        <li>API development</li>
        <li>API development</li>
      </ul>
    </div>
  );
};
const Heading = (heading, Description) => {
  return (
    <div className="header border bg-black rounded max-w-fit p-4">
      <h1 className={styles.sectionSubText}>API Development</h1>
      <p className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
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
