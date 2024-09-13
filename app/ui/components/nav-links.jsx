'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
const links = [
  { name: 'Новости', href: '/news'},
  { name: 'Вакансии', href: '/vacancy'},
  { name: 'Резюме', href: '/resume'},
  { name: 'Курсы', href: '/courses'},
  { name: 'Работодателям', href: '/employers'},
  { name: 'О сайте', href: '/about'},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className='hidden md:flex md:flex-row text-gray-300'>
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
    </nav>
  );
}