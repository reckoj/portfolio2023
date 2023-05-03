import React from 'react';
import AboutLight from '@/public/about_light.svg';
import AboutDark from '@/public/about.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const play = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <section className="wrapper py-28" id="about">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mb-8 tracking-wider">
        who am i?
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-7 md:gap-14">
        <p className="text-lg md:text-xl dark:text-gray-300 text-gray-600 leading-8 w-full md:w-5/5">
          {`
          As a full stack web and mobile developer with a focus in frontend development,
           I am passionate about creating visually stunning, user-friendly websites and mobile 
           apps that offer a seamless user experience. I specialize in transforming beautiful designs 
           into fully functional, responsive interfaces that exceed user expectations.
           In addition to my frontend development skills, I also possess a solid understanding of 
           backend development, databases, and APIs. This allows me to seamlessly integrate frontend 
           and backend technologies to create dynamic, responsive applications that meet the needs of modern businesses.
           Overall, I am a driven, detail-oriented frontend developer with a passion for creating digital experiences that 
           exceed expectations. I am excited to continue growing my skills and exploring new technologies as I help businesses 
           bring their digital visions to life.
          
          
          `}
        </p>
        <motion.div
          className="w-full md:w-4/5  mb-20"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <Image
            src={AboutLight}
            alt="about image"
            className="dark:hidden block"
          />
          <Image
            src={AboutDark}
            className="dark:block hidden"
            alt="about image"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
