'use client';

import Link from 'next/link';
import ReworkLogo from '@components/rework-logo';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

// Map of links to display in the side navigation.
const links = [
  { name: 'Новости', href: '/news'},
  { name: 'Вакансии', href: '/vacancy'},
  { name: 'Резюме', href: '/resume'},
  { name: 'Курсы', href: '/courses'},
  { name: 'Работодателям', href: '/employers'},
  { name: 'О сайте', href: '/about'},
];


export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full justify-center h-16 bg-white">
      <div className="flex flex-row h-16 items-center w-3/6">
        <Link
          className="flex items-end justify-start rounded-md p-4"
          href="/"
        >
          <div className="text-black">
            <ReworkLogo />
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-gray-300 md:hidden focus:outline-none w-6 h-6"
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

        {/* Десктопное меню */}
        <div className="hidden md:flex flex-row ">
          {/* <NavLinks /> */}
        </div>

        {/* Мобильное меню */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } w-full h-full bg-black opacity-60 absolute `}
        ></div>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col w-4/5 h-dvh space-y-2 md:hidden absolute right-0 bg-white`}
        >
          <nav className='flex'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
        </div>
      </div>
    </header>
  );
}
