import React from 'react';
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
    { title: 'Docker', component: Docker },
    { title: 'Flutter', component: Flutter },
    { title: 'Git', component: Git },

    { title: 'MongoDB', component: MongoDb },
    { title: 'Node.js', component: Nodejs },
    { title: 'PostgreSQL', component: Postgres },
    { title: 'React', component: ReactLogo },
    { title: 'Tailwind CSS', component: Tailwind },
    { title: 'TypeScript', component: Typescript },
  ];

  return (
    <section
      className="wrapper flex md:flex-row flex-col-reverse py-28 gap-14"
      id="expertise"
    >
      <div className="w-full md:w-3/5">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mb-8 tracking-wider">
          what i know
        </h2>

        <h3 className="text-2xl font-bold mb-2 ">Mobile Development</h3>
        <p className="text-base mb-7 dark:text-gray-300 text-gray-700">
          Web and mobile development involves creating websites and applications
          that run on the internet or mobile devices, using a variety of
          programming languages and tools to build, test, and deploy software
        </p>
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
