import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row items-start gap-10 w-full">
    
    <div className='flex flex-col flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
        <p class = "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Higher Education</p>
        <p class = "font-medium lg:text-[45px] sm:text-[32px] xs:text-[26px] text-[22px] lg:leading-[46px] text-white-100 mt-4">
        Bachelor of Software Engineering and AI
        </p>
        <p class = "font-medium lg:text-[45px] sm:text-[32px] xs:text-[26px] text-[22px] lg:leading-[46px] text-white-100 mt-8">
        American University Kyiv
        </p>
        <p class = "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          (povered by Arizona State University)
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-[19px] max-w-3xl leading-[30px] green-pink-text-gradient'
      >
        First Ukrainian university that become a member of EucA
      </motion.p>
    </div>

    <div className='flex flex-col flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology) => (
        <div className='w-32 h-32' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
