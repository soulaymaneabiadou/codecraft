import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from '@utils/navigation';

interface Props {
  className: string;
}

export const Navigation = ({ className }: Props) => {
  let router = useRouter();

  return (
    <nav className={'text-base lg:text-sm ' + className}>
      <ul className='space-y-9'>
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className='font-display font-medium text-white'>
              {section.title}
            </h2>

            <ul className='mt-2 space-y-2 border-l-2 border-gray-800 lg:mt-4 lg:space-y-4'>
              {section.links.map((link) => (
                <li key={link.href} className='relative'>
                  <Link href={link.href}>
                    <a
                      className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full ${
                        link.href === router.pathname
                          ? 'font-semibold text-teal-500 before:bg-teal-500'
                          : 'before:hidden hover:before:block text-gray-400 before:bg-gray-700 hover:text-gray-300'
                      }
                      `}>
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
