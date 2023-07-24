import React, { useState } from 'react';
import Image from 'next/image';
import CSS from '@/public/language_logo/css.svg';
import Docker from '@/public/language_logo/docker.svg';
import Flutter from '@/public/language_logo/flutter.svg';
import Git from '@/public/language_logo/git.svg';
import HTML from '@/public/language_logo/html-1.svg';
import MongoDb from '@/public/language_logo/mongodb.svg';
import Nodejs from '@/public/language_logo/nodejs.svg';
import Postgres from '@/public/language_logo/postgres.svg';
import ReactLogo from '@/public/language_logo/react.svg';
import Tailwind from '@/public/language_logo/tailwind.svg';
import Typescript from '@/public/language_logo/typescript.svg';
import ExpertiseLight from '@/public/expertise_light.svg';
import ExpertiseDark from '@/public/expertise.svg';

function Expertise() {
  const skillList = [
    { title: 'HTML', component: HTML },
    { title: 'CSS', component: CSS },
    { title: 'React', component: ReactLogo },
    { title: 'TypeScript', component: Typescript },
    { title: 'Flutter', component: Flutter },
    { title: 'Tailwind CSS', component: Tailwind },
    { title: 'Git', component: Git },

    { title: 'Node.js', component: Nodejs },
    { title: 'PostgreSQL', component: Postgres },
    { title: 'MongoDB', component: MongoDb },
    // { title: 'Docker', component: Docker },
  ];

  const [selected, setSelected] = useState(true);
  return (
    <section
      className="wrapper flex md:flex-row flex-col-reverse py-28 gap-14"
      id="expertise"
    >
      <div className="w-full md:w-3/5">
        <div className="items-center flex justify-center flex-row mb-4  ">
          <div
            style={{ backgroundColor: !selected ? '' : '#9B50D6' }}
            className="  rounded-lg shadow-md p-2 mr-6 border-solid border-2 border-[#9B50D6]"
          >
            <button onClick={() => setSelected(true)}>
              <p className=" font-bold">Coding Skills</p>
            </button>
          </div>

          <div
            style={{ backgroundColor: selected ? '' : '#9B50D6' }}
            className=" rounded-lg shadow-md p-2 border-solid border-2 border-[#9B50D6]"
          >
            <button onClick={() => setSelected(false)}>
              <p className=" font-bold">Soft Skills</p>
            </button>
          </div>
        </div>

        {selected ? (
          <div className="flex flex-col items-center md:flex-row md:justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap gap-4">
              <div className=" rounded-lg shadow-md p-6">
                <p className=" mb-4 text-xl font-bold">Frontend Devlopment</p>
                <p className="text-xs text-[#8CCE58] font-bold">
                  Bringing imaganation to reality{' '}
                </p>
              </div>
              <div className=" rounded-lg shadow-md p-6">
                <p className="mb-4 text-xl font-bold">Web Devlopment</p>
                <p className="text-xs text-[#8CCE58] font-bold">
                  Creating dynamic and intutive web applications
                </p>
              </div>
              <div className=" rounded-lg shadow-md p-6">
                <p className="mb-4 text-xl font-bold">Mobile Development</p>
                <p className="text-xs  text-[#8CCE58]   font-bold">
                  Impress the world with innotive mobile apps.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center md:flex-row md:justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap gap-4">
              <div className=" rounded-lg shadow-md p-6  ">
                <p className=" mb-4 text-xl font-bold">Communication</p>
                <p className="text-xs text-[#8CCE58] font-bold">
                  Effective exchange of informationa and ideas
                </p>
              </div>
              <div className=" rounded-lg shadow-md p-6">
                <p className="mb-4 text-xl font-bold">Collaboration</p>
                <p className="text-xs text-[#8CCE58] font-bold">
                  I work effectively in a team environment
                </p>
              </div>
              <div className=" rounded-lg shadow-md p-6">
                <p className="mb-4 text-xl font-bold">Problem Solving</p>
                <p className="text-xs  text-[#8CCE58]   font-bold">
                  Analytical reasoning, providing to acheive logical solutions
                </p>
              </div>
            </div>
          </div>
        )}
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mt-32 mb-4 tracking-wider">
          what i know
        </h2>
        {/* <h3 className="text-2xl font-bold mb-2 ">Mobile Development</h3>
        <p className="text-base mb-7 dark:text-gray-300 text-gray-700">
          Web and mobile development involves creating websites and applications
          that run on the internet or mobile devices, using a variety of
          programming languages and tools to build, test, and deploy software
        </p> */}
        <div>
          <div className="flex gap-3 items-start">
            <div>
              {/* side ball */}
              <div className="w-5 h-5 border border-black rounded-full mt-1 md:mt-2 dark:border-white"></div>
            </div>
            <article>
              <h3 className="text-2xl font-bold mb-2 ">Software Development</h3>
              <p className="dark:text-gray-300 text-gray-700">
                Software development involves creating computer programs,
                applications, and systems through the process of designing,
                coding, testing, and maintaining software. It encompasses a wide
                range of activities that require technical expertise,
                creativity, and problem-solving skills to produce software that
                meets the needs of end-users.
              </p>
            </article>
          </div>
          <div>
            <h4 className="text-xl dark:text-gray-300 text-gray-700 font-bold mt-14">
              Full Stack Developer Knowlegde
            </h4>
            <div className="flex flex-wrap items-center justify-start gap-4">
              {skillList.map((skill, id) => {
                return (
                  <div key={skill.title} className="max-w-xs">
                    <Image
                      height={30}
                      width={40}
                      src={skill.component.src}
                      alt={skill.title}
                      title={skill.title}
                      className="max-w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <Image
          src={ExpertiseLight}
          alt="expertise image"
          className="w-full h-auto dark:hidden block"
        />
        <Image
          src={ExpertiseDark}
          alt="expertise image"
          className="w-full h-auto dark:block hidden"
        />
      </div>
    </section>
  );
}

export default Expertise;
