import { useRouter } from 'next/router';
import { Hero } from './Hero';
import { PageNavigation } from './PageNavigation';
import { Sidenav } from '@components/Navigation';
import { Prose, TableOfContents } from '@components/shared';
import { Header } from '@components/Header';
import { navigation } from '@utils/navigation';

const isHomePage = (pathname: string) => pathname === '/';

interface Props {
  title: string;
  children: any;
  tableOfContents: any;
}

export const Layout = ({ children, title, tableOfContents }: Props) => {
  const router = useRouter();

  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  );

  return (
    <div className='bg-gray-900 text-white'>
      <Header />

      <div className='max-w-8xl mx-auto relative px-4 pt-5 pb-2 sm:px-6 lg:px-0'>
        {isHomePage(router.pathname) && <Hero />}

        <div className='relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12'>
          <Sidenav />

          <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
            <article>
              {(title || section) && (
                <header className='mb-9 space-y-1'>
                  {section && (
                    <p className='font-display text-sm font-medium text-teal-500'>
                      {section.title}
                    </p>
                  )}
                  {title && (
                    <h1 className='font-display text-3xl tracking-tight text-white'>
                      {title}
                    </h1>
                  )}
                </header>
              )}

              <Prose>{children}</Prose>
            </article>

            <PageNavigation />
          </div>

          <TableOfContents tableOfContents={tableOfContents} />
        </div>
      </div>
    </div>
  );
};
