import React from 'react';
import Link from 'next/link';
import LinkdinDark from '@/public/icons/linkdin_dark.svg';
import LinkdinLight from '@/public/icons/linkdin_light.svg';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
function Cta() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col mb-10"
    >
      <h2 className="text-4xl md:text-8xl md:w-full font-bold text-center leading-tight mb-8 md:mb-24">
        Keep in touch with me <br /> Say Hi
      </h2>
      <p className=" text-lg md:text-xl md:w-1/2 font-normal text-center leading-tight mb-8 md:mb-24 px-4 text-gray-600  dark:text-gray-300">
        {`Seeking freelance opportunities. If you're just looking to collaborate on a
        project I'm also open to the possibilty. Please feel free to reach out
        to me.`}{' '}
        <br />
        <span className="text-[#8CCE58] font-bold mt-4 ">THANK YOU!</span>
      </p>

      <div className="items-center flex justify-center flex-row mb-4  ">
        {/* <div className="  rounded-lg shadow-md p-2 mr-6 border-solid border-2 border-[#9B50D6] hover:bg-[#9B50D6]">
          <p className="text-[#8CCE58] animate-pulse">For Permanent Role</p>
          <Link href={'mailto:reckojean@gmail.com'}>
            <p className=" font-bold">Recko Jean</p>
          </Link>
        </div> */}

        <div className="rounded-lg shadow-md p-2  border-solid border-2 border-[#9B50D6] hover:bg-[#9B50D6]">
          <p className="text-[#8CCE58] animate-pulse">For Freelance Role</p>
          <Link href={'mailto:dokadatech@gmail.com'}>
            <p className="flex items-center justify-center font-bold">
              Dokadatech
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
