import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="  mb-10 bg-coverpy-6 ">
      <div className="container mx-auto ">
        <div className="space-x-4 flex justify-center items-center">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
