import React from 'react';
import AppStore from '@/public/icons/appstore.svg';
import Github from '@/public/icons/github.svg';
import PlayStore from '@/public/icons/playstore.svg';
import Image from 'next/image';
import FeatureImage from '@/public/feature.svg';
import ProjectsCarousel from './ProjectsCarousel';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

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

const Feature = () => {
  return (
    <section
      id="featured"
      className="wrapper flex flex-col md:flex-row gap-14 md:gap-28"
    >
      <AnimatePresence>
        <motion.div whileInView={{ opacity: 1 }} className="w-full md:w-3/5">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={FeatureImage.src}
            alt="feature image"
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="w-full text-5xl md:w-3/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="md:text-7xl lg:text-8xl font-bold">
            Featured Project
          </h2>
          <div className="sm:max-w-lg text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300">
            <p className="mt-7 mb-4 md:mb-6">
              Wheela is your road trip sidekick. How it works? Enter your
              vehicle information such as make, model and year, along with your
              starting point and destination for your road trip.
            </p>
            <p className="mb-10">
              Wheela then finds the quickest routes calculates your distance of
              travel, fuel consumption and time spent traveling and gives an
              estimate of total fuel cost (one way or round trip) that is about
              99% accurate.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm">
              Official relase to app and play store coming soon!
            </p>
            {/* <Link href="" target="_blank">
              <Image src={AppStore} alt="applestore" width={150} height={150} />
            </Link>
            <Link href="" target="_blank">
              <Image src={PlayStore} alt="playstore" width={150} height={150} />
            </Link> */}
            <Link href=" https://github.com/reckoj/wheela" target="_blank">
              <Image src={Github} alt="github" width={150} height={150} />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Feature;
