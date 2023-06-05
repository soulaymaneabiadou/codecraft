import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from '@utils/navigation';

const usePrevAndNextPages = (pathname: string) => {
  const allLinks = navigation.flatMap((section) => section.links);
  const linkIndex = allLinks.findIndex((link) => link.href === pathname);

  return [allLinks[linkIndex - 1], allLinks[linkIndex + 1]];
};

export const PageNavigation = () => {
  const router = useRouter();

  const [previousPage, nextPage] = usePrevAndNextPages(router.pathname);

  return (
    <dl className='mt-12 flex border-t border-gray-200 pt-6 dark:border-gray-800'>
      {previousPage && (
        <div>
          <dt className='font-display text-sm font-medium text-gray-900 dark:text-white'>
            Previous
          </dt>
          <dd className='mt-1'>
            <Link href={previousPage.href}>
              <a className='text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'>
                &larr; {previousPage.title}
              </a>
            </Link>
          </dd>
        </div>
      )}
      {nextPage && (
        <div className='ml-auto text-right'>
          <dt className='font-display text-sm font-medium text-gray-900 dark:text-white'>
            Next
          </dt>
          <dd className='mt-1'>
            <Link href={nextPage.href}>
              <a className='text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'>
                {nextPage.title} &rarr;
              </a>
            </Link>
          </dd>
        </div>
      )}
    </dl>
  );
};
