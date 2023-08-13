import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import DiscoveryImage from '@/public/discovery.svg';

import { BsBoxArrowUpRight } from 'react-icons/bs';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
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

function Projects() {
  return (
    <section id="featured">
      <div className="w-full text-5xl md:w-3/5 flex  ">
        <h2 className="md:text-5xl lg:text-8xl font-bold ml-32">
          {`Projects I've completed`}
        </h2>
      </div>
      <div className="wrapper py-10 flex flex-col md:flex-row gap-14 md:gap-12">
        <AnimatePresence>
          <motion.div whileInView={{ opacity: 1 }} className="w-full md:w-3/5 ">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              src={DiscoveryImage.src}
              alt="feature image"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div
            className="w-full text-5xl md:w-3/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="sm:max-w-lg text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300">
              <p className="-mt-10 md:mb-6">
                Discovery is a client project - A web based application which
                allows users to create and manage organizations. Each
                organization can have associated details, such as name,
                industry, location. More features such Customer Management:
                users manage customer profiles, Contact Management: This feature
                enables users to maintain a comprehensive list of contacts
                associated with each organization or customer. Order Management:
                facilitates the creation of customer orders and interactions.
                Users can manage orders, view order and resolve orders once
                completetd.
              </p>
              <div className="flex flex-wrap items-center flex-row mb-6">
                <p className="text-[#8BD650] ">React</p>
                <p className="text-[#8BD650]  mx-4">Redux</p>
                <p className="text-[#8BD650]  mx-4">TypeScript</p>
                <p className="text-[#8BD650]  mx-4">Node.js</p>
                <p className="text-[#8BD650]  mx-4">Express</p>
                <p className="text-[#8BD650]  mx-4">MongoDB</p>
                <p className="text-[#8BD650]  mx-4">Tailwind</p>
              </div>
            </div>
            <div className="flex mb-10">
              <Link
                className="flex items-center"
                href="https://discovery-eosin.vercel.app/"
                target="_blank"
              >
                <p className="text-sm mr-2 text-[#9B50D6] ">Try it out here!</p>
                <BsBoxArrowUpRight size={12} color="9B50D6" />
              </Link>
            </div>

            <span className="sm:max-w-lg text-lg md:text-lg font-bold text-[#8BD650] dark:text-[#8BD650]">
              NOTE:
            </span>
            <p className="sm:max-w-lg text-lg md:text-lg font-normal text-gray-600 dark:text-gray-300">
              Backend is hosted on a free server, which takes about 15-20
              seconds to respond to intial requests.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
