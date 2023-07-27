import React from 'react';
import ProjectOne from '@/public/project/allinone2.png';
import ProjectTwo from '@/public/project/trainMe1.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import ProjectsCarousel from './ProjectsCarousel';
import Link from 'next/link';

function Projects() {
  return (
    <section className="wrapper py-28" id="experience">
      <h2 className="text-center text-3xl md:text-5xl font-bold ">
        {`Projects I've completed`}
      </h2>

      <div className="flex flex-wrap justify-center gap-y-10 md:gap-y-14">
        {/* <ProjectsCarousel /> */}
        <div className="flex flex-wrap -mx-4">
          {/* <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <Image
              src={ProjectOne.src}
              alt="all in ones"
              width={700}
              height={800}
            />

            <div className=" p-4 flex justify-center items-center">
              All In One - Client project fjsoifmns ifsofmjs oifjmsf oifj0spfm
              foijfds oif0psm
              <Link
                className="text-sm underline hover:underline-offset-4 text-100 ml-2 text-[#8CCE58] "
                href="https://youtu.be/GcZyLF9h5Xk"
                target="_blank"
              >
                See brief video on youtube
              </Link>
            </div>
          </div> */}
          <div className="w-full md:w-full px-4 mb-4 md:mb-0">
            <Image
              src={ProjectOne.src}
              alt="all in ones"
              width={700}
              height={800}
            />

            <div className=" p-4 flex justify-center items-center">
              All In One - Client project
              <Link
                className="text-sm underline hover:underline-offset-4 text-100 ml-2 text-[#8CCE58] "
                href="https://youtu.be/GcZyLF9h5Xk"
                target="_blank"
              >
                See brief video on youtube
              </Link>
            </div>
          </div>
          {/* <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <Image
              src={ProjectOne.src}
              alt="all in ones"
              width={700}
              height={800}
            />

            <div className=" p-4 flex justify-center items-center">
              All In One - Client project fjsoifmns ifsofmjs oifjmsf oifj0spfm
              foijfds oif0psm
              <Link
                className="text-sm underline hover:underline-offset-4 text-100 ml-2 text-[#8CCE58] "
                href="https://youtu.be/GcZyLF9h5Xk"
                target="_blank"
              >
                See brief video on youtube
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
