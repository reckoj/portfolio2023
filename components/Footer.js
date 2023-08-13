import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    // <footer className="pt-4 pb-16 flex ietms-center flex-row flex-wrap justify-center w-full">
    //   {/* <p>2023 All Rights Reserved © </p> */}
    //   <div className="hidden dark:block">
    //     <Link
    //       target="_blank"
    //       href="https://www.linkedin.com/in/recko-jean-5369b09a/"
    //     >
    //       <Image src={LinkdinDark} width={50} height={50} alt="linkdin logo" />
    //     </Link>
    //     <Link
    //       target="_blank"
    //       href="https://www.linkedin.com/in/recko-jean-5369b09a/"
    //     >
    //       <Image src={LinkdinDark} width={50} height={50} alt="linkdin logo" />
    //     </Link>
    //   </div>
    // </footer>

    <footer className=" hidden md:block ml-6 mb-10 bg-coverpy-6 ">
      <div className="container mx-auto ">
        <div className="space-x-4 flex justify-center">
          <a
            href="https://www.linkedin.com/in/recko-jean-5369b09a/"
            target="_blank"
            className="hover:text-[#9B50D6] flex items-center"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/reckoj"
            target="_blank"
            className="hover:text-[#9B50D6] flex items-center "
          >
            <FaGithubSquare />
            GitHub
          </a>

          {/* <a
            href={'mailto:dokadatech@gmail.com'}
            className="hover:text-gray-400"
          >
            Freelance work Dokadatech@gmailcom
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
