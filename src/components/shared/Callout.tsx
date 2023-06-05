import React from 'react';

type Icons = { [key: string]: ({ className }: any) => JSX.Element };

type Styles = { [key: string]: { [key: string]: string } };

interface Props {
  title: string;
  children: string;
  type: 'note' | 'warning';
}

export const Callout = ({ title, children, type = 'note' }: Props) => {
  const Icon = icons[type];

  return (
    <div className={'my-8 flex rounded-3xl p-6 ' + styles[type].container}>
      <Icon className='' />

      <div className='ml-4 flex-auto'>
        <p className={'m-0 font-display text-xl ' + styles[type].title}>
          {title}
        </p>

        <div className={'prose mt-2.5 ' + styles[type].body}>{children}</div>
      </div>
    </div>
  );
};

const styles: Styles = {
  note: {
    container:
      'bg-teal-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-teal-900 dark:text-teal-400',
    body: 'text-teal-800 prose-code:text-teal-900 dark:text-gray-300 dark:prose-code:text-gray-300 prose-a:text-teal-900 [--tw-prose-background:theme(colors.teal.50)]'
  },
  warning: {
    container:
      'bg-amber-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 prose-code:text-amber-900 prose-a:text-amber-900 [--tw-prose-underline:theme(colors.amber.400)] dark:[--tw-prose-underline:theme(colors.teal.700)] [--tw-prose-background:theme(colors.amber.50)] dark:text-gray-300 dark:prose-code:text-gray-300'
  }
};

const icons: Icons = {
  note: (className) => (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={'stroke-teal-500 h-8 w-8 flex-none ' + className}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
      />
    </svg>
  ),
  warning: (className) => (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={'stroke-amber-500 h-8 w-8 flex-none ' + className}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
      />
    </svg>
  )
};
