import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';
import { BsXLg, BsListStars } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Featured', href: '#featured' },
    { title: 'Expertise', href: '#expertise' },
    { title: 'Experience', href: '#experience' },
  ];
  const path = usePathname();
  return (
    <header className="flex  flex-wrap md:flex-nowrap items-center justify-between py-4 px-3">
      <div className="flex items-center">
        <Link href="#">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
      </div>

      <nav className="hidden md:block ml-6  bg-cover">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.title}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  href={link.href}
                  className={`${
                    link.href === path ? 'hover:text-gray-500' : ''
                  }`}
                >
                  {link.title}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="#contact"
        className="md:block px-4 py-2 rounded hover:bg-gray-700 hidden"
      >
        Contact
      </Link>
      <button
        className="text-xl/8 md:hidden flex items-center px-8 py-2 rounded text-black hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsListStars />}
      </button>

      {isOpen && (
        <nav className="md:hidden w-full mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.title}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-[#8BD650]"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="block px-4 py-2 rounded hover:bg-gray-700 md:hidden"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
