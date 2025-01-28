import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yaroslav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Cloud-Based,  <br className='sm:block hidden' />
            Mobile and Desktop applications
          </p>
          <p class = "font-medium lg:text-[24px] sm:text-[20px] xs:text-[17px] text-[22px] lg:leading-[46px] text-white-100 mt-6">
            My GitHub repository:
          </p>
          <p>
            <a href="https://github.com/YsAuRnOfSiLrAeV" target="_blank" rel="noopener noreferrer" class="font-medium lg:text-[22px] sm:text-[19px] xs:text-[15px] text-[22px] lg:leading-[46px] green-pink-text-gradient mt-2"> https://github.com/YsAuRnOfSiLrAeV</a>
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
