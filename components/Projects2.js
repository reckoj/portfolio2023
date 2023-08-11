import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Allin1 from '@/public/allin12.svg';

import { BsBoxArrowUpRight } from 'react-icons/bs';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const featureImage = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
    whileInView: {
      opacity: 1,
    },
  },
};

function Projects2() {
  return (
    <section
      id="featured"
      className="wrapper mb-32 flex flex-col md:flex-row gap-14 md:gap-28"
    >
      <AnimatePresence>
        <motion.div
          className="w-full text-2xl md:w-3/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="sm:max-w-lg text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300">
            <p className="mt-7  md:mb-6">
              All In One is a client project - The client wanted an app where
              admins can create employees, set their location and have employees
              clock in using the app but only when they are within a specified
              distance of their work location. Other functionalities include
              employee off days tracking, sending company wide or single user
              notification announcements and much more...
            </p>
            <div className="flex flex-wrap items-center flex-row mb-6">
              <p className="text-[#8BD650] ">React Native</p>
              <p className="text-[#8BD650]  mx-4">Node.js</p>
              <p className="text-[#8BD650]  mx-4">Express</p>
              <p className="text-[#8BD650]  mx-4">MongoDB</p>
            </div>
          </div>
          <div className="flex">
            <Link
              className="flex items-center mb-20"
              href=" https://www.youtube.com/watch?v=GcZyLF9h5Xk&ab_channel=programmerJean"
              target="_blank"
            >
              <p className="text-sm mr-2 text-[#9B50D6] ">
                Brief video on youtube!
              </p>
              <BsBoxArrowUpRight size={12} color="9B50D6" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          className="w-full md:w-3/5  -mt-32"
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={Allin1.src}
            alt="feature image"
            className="w-full rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Projects2;
