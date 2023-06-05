import Link from 'next/link';

export const Grid = ({ children }: any) => {
  return (
    <div className='not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {children}
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  href: string;
}

Grid.Card = function Card({ title, description, href }: CardProps) {
  return (
    <div className='group relative rounded-xl border border-gray-200 dark:border-gray-800'>
      <div className='absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--grid-card-hover-bg,theme(colors.teal.50)),var(--grid-card-hover-bg,theme(colors.teal.50)))_padding-box,linear-gradient(to_top,theme(colors.teal.400),theme(colors.teal.400),theme(colors.teal.500))_border-box] group-hover:opacity-100 dark:[--grid-card-hover-bg:theme(colors.gray.800)]' />
      <div className='relative overflow-hidden rounded-xl p-6'>
        <h2 className='font-display text-base text-gray-900 dark:text-white'>
          <Link href={href}>
            <a>
              <span className='absolute -inset-px rounded-xl' />
              {title}
            </a>
          </Link>
        </h2>

        <p className='mt-1 text-sm text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
};
