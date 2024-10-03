'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
const navLinks = [
  { name: 'Новости', href: '/news'},
  { name: 'Вакансии', href: '/vacancy'},
  { name: 'Резюме', href: '/resume'},
  { name: 'Курсы', href: '/course'},
  { name: 'Работодателям', href: '/employers'},
  { name: 'О сайте', href: '/about'},
];

const policyLinks = [
  { name: '', href: '' },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className='hidden md:flex md:flex-row text-gray-500'>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 font-semibold hover:text-primary-100 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-500': pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}

export function PolicyLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 font-semibold hover:text-primary-100 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-500': pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}