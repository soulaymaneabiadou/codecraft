import React from 'react';
import { Navigation } from './Navigation';

export const Sidenav = () => {
  return (
    <div className='hidden lg:relative lg:block lg:flex-none'>
      <div className='absolute inset-y-0 right-0 w-[50vw] bg-gray-50 dark:hidden' />
      <div className='sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5'>
        <div className='absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-gray-800 dark:block' />

        <div className='absolute top-28 bottom-0 right-0 hidden w-px bg-gray-800 dark:block' />

        <Navigation className='w-64 pr-8 xl:w-72 xl:pr-16' />
      </div>
    </div>
  );
};
