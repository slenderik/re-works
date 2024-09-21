'use client';

import Link from 'next/link';
import NavLinks from '@components/nav-links';
import ReworkLogo from '@components/rework-logo';
import { useState } from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex sticky z-30 top-0 shadow-md w-full h-16 px-4 justify-between items-center bg-white md:justify-between lg:justify-evenly">

      {/* <div className="flex flex-row h-16 items-center w-3/6"> */}
      <Link
        className="flex items-end justify-start"
        href="/"
      >
        <div className="text-black">
          <ReworkLogo />
        </div>
      </Link>

      {/* Desktop nav */}
      <NavLinks/>

      {/* Mobile nav */}

      <button
        onClick={toggleMenu}
        className="text-gray-300 md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Заднее затемнение */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } w-full h-full bg-black opacity-60 absolute `}
      ></div>
      
      {/* Сама менюшка с ссылками */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col w-4/5 h-dvh space-y-2 md:hidden absolute right-0 bg-red`}
      >
        <NavLinks />
      </div>
      {/* </div> */}
    </header>
  );
}
