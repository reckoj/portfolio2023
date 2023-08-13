import React from 'react';
import Link from 'next/link';
import LinkdinDark from '@/public/icons/linkdin_dark.svg';
import LinkdinLight from '@/public/icons/linkdin_light.svg';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
function Cta() {
  return (
    <section id="contact" className="flex justify-center items-center flex-col">
      {/* <Link
        target="_blank"
        href="https://www.linkedin.com/in/recko-jean-5369b09a/"
        className="mb-4 md:mb-8 mt-10 block dark:hidden"
      >
        <Image src={LinkdinLight} width={50} height={50} alt="linkdin logo" />
      </Link> */}
      <h2 className="text-4xl md:text-8xl font-bold text-center leading-tight mb-6 md:mb-24">
        Keep in touch with me <br /> Say Hi
      </h2>
      <p className=" w-1/3 text-lg md:text-lg font-normal text-center leading-tight mb-6 md:mb-24">
        {` I'm currently seeking opportunities; Whether it's a Full-Time position
        or a Freelance opportunity. If you're just looking to collaborate on a
        project I'm also open to the possibilty. Please feel free to reach out
        to me.`}{' '}
        <br /> THANK YOU!
      </p>
      <div className="flex flex-row flex-wrap gap-4">
        <div className=" rounded-lg shadow-md p-2 border-solid border-2 border-[#9B50D6] mb-48 hover:bg-[#9B50D6]">
          <Link
            href={'mailto:reckojean@gmail.com'}
            className="flex items-center font-normal text-lg md:text-lg  "
          >
            <HiOutlineMail className="mr-2" />
            For Permanent Role
          </Link>
        </div>
        <div className=" rounded-lg shadow-md p-2 border-solid border-2 border-[#9B50D6] mb-48 hover:bg-[#9B50D6]">
          <Link
            href={'mailto:dokadatech@gmail.com'}
            className="flex items-center font-normal text-lg md:text-lg  "
          >
            <HiOutlineMail className="mr-2" />
            For Freelance Role
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
