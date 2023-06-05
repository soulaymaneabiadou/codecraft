import { Fragment } from 'react';
import Link from 'next/link';
import useTableOfContents from '@hooks/useTableOfContents';

interface Props {
  tableOfContents: any;
}

export const TableOfContents = ({ tableOfContents }: Props) => {
  let currentSection = useTableOfContents(tableOfContents);

  const isActive = (section: any) => {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  };

  return (
    <div className='hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6'>
      <nav aria-labelledby='on-this-page-title' className='w-56'>
        {tableOfContents.length > 0 && (
          <Fragment>
            <h2
              id='on-this-page-title'
              className='font-display text-sm font-medium text-gray-900 dark:text-white'>
              On this page
            </h2>

            <ul className='mt-4 space-y-3 text-sm'>
              {tableOfContents.map((section: any) => (
                <li key={section.id}>
                  <h3>
                    <Link href={`#${section.id}`}>
                      <a
                        className={
                          isActive(section)
                            ? 'text-teal-500'
                            : 'font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                        }>
                        {section.title}
                      </a>
                    </Link>
                  </h3>

                  {section?.children?.length > 0 && (
                    <ul className='mt-2 space-y-3 pl-5 text-gray-500 dark:text-gray-400'>
                      {section.children.map((subSection: any) => (
                        <li key={subSection.id}>
                          <Link href={`#${subSection.id}`}>
                            <a
                              className={
                                isActive(subSection)
                                  ? 'text-teal-500'
                                  : 'hover:text-gray-600 dark:hover:text-gray-300'
                              }>
                              {subSection.title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </nav>
    </div>
  );
};
