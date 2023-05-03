import React from 'react';
import ProjectOne from '@/public/project/allinone2.png';
import ProjectTwo from '@/public/project/trainMe1.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import ProjectsCarousel from './ProjectsCarousel';

function Projects() {
  const projectList = [
    {
      name: 'All in one - Client project',
      desc: '',
      date: 'February 2, 2023',
      link: '#',
      image: ProjectOne,
    },
    {
      name: 'Wireframing for GoPlane SuperApp',
      desc: '',
      date: 'October 21, 2019',
      image: ProjectTwo,
    },
  ];
  function Project({ name, date, image, desc, image2 }) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image src={image} alt={name} className="w-full h-auto" />
          {/* <Image src={image2} alt={name} className="w-full h-auto" /> */}

          <div className="flex flex-row justify-around md:flex-row md:items-center w-full mt-3 md:mt-5">
            <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-0">
              {name}
            </h3>
            <p>{desc}</p>
            <p className="text-base font-bold md:text-2xl dark:text-gray-400">
              {date}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <section className="wrapper py-28" id="experience">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
        {`Some of the projects I've worked on before`}
      </h2>

      <div className="flex flex-wrap justify-center gap-y-10 md:gap-y-14">
        {/* {projectList.map((project, id) => {
          return (
            <Project
              key={id}
              name={project.name}
              desc={project.desc}
              image={project.image}
              // image2={project.image2}
              date={project.date}
            />
          );
        })} */}
        <ProjectsCarousel />
      </div>
    </section>
  );
}

export default Projects;
