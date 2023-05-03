/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import HeroDark from '@/public/hero.svg';
import { useTheme } from 'next-themes';
import HeroLight from '@/public/hero_light.svg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
function Hero() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="px-3 flex items-center flex-col py-14 md:py-32">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.35 }}
        >
          <h1 class="text-center">
            <span class="block text-5xl sm:text-6xl md:text-8xl font-light">
              Hi, I’m <span class="text-[#8BD650] font-black">RECKO.</span>
            </span>

            <p class="text-2xl sm:text-3xl md:text-5xl my-5 font-bold">
              A Mobile and Web developer based in Canada
            </p>
          </h1>

          <div className="relative flex flex-col items-center justify-center overflow-hidden py-10">
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                    theme == 'dark' ? setTheme('light') : setTheme('dark');
                  }}
                  className="w-24 h-10 bg-[#8BD650] rounded-full peer peer-focus:ring-green-300 peer-checked:after:right-[5px] peer-checked:after:left-auto peer-checked:after:border-l peer-checked:after:border-black after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#6da83f]"
                ></div>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <Image
              width={1440}
              height={1340}
              src={HeroLight.src}
              alt="hero image"
              className="dark:hidden block"
            />
            <Image
              width={1040}
              height={1340}
              src={HeroDark.src}
              alt="hero image"
              className="dark:block hidden"
            />
            {/* <img
          src={HeroLight.src}
          alt="hero image"
          className="dark:hidden block"
        /> */}
            {/* <img
          src={HeroDark.src}
          alt="hero image"
          className="dark:block hidden"
        /> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;
