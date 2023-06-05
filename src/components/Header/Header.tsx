import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search } from './Search';
import HeaderLinks from './HeaderLinks';
import { Logo } from '@components/shared';
import { MobileNavigation } from '@components/Navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex max-w-8xl flex-wrap items-center justify-between bg-white px-4 py-5 sm:px-6 lg:px-8 shadow-md shadow-gray-900/5 transition duration-500 dark:shadow-none  ${
        isScrolled
          ? 'dark:bg-gray-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75'
          : 'dark:bg-transparent'
      } `}>
      <div className='mr-6 lg:hidden'>
        <MobileNavigation />
      </div>

      <div className='relative flex flex-grow basis-0 items-center'>
        <Link href='/'>
          <a className='block w-auto overflow-hidden'>
            <span className='sr-only'>Home page</span>
            <Logo />
          </a>
        </Link>
      </div>

      <div className='-my-5 mr-6 sm:mr-8 md:mr-0'>
        <Search />
      </div>

      <HeaderLinks />
    </header>
  );
};
