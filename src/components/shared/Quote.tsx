interface Props {
  owner: string;
  children: any;
}

export const Quote = ({ owner, children }: Props) => {
  return (
    <div className='my-8 flex rounded-3xl bg-sky-50 p-6 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        className='fill-gray-700 h-8 w-8 flex-none'>
        <path d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z' />
      </svg>

      <div className='ml-4 flex-auto'>
        <div className='prose text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-gray-300 dark:prose-code:text-gray-300'>
          {children}
        </div>

        <p className='m-0 mt-1 font-display text-sm text-gray-400'>— {owner}</p>
      </div>
    </div>
  );
};
