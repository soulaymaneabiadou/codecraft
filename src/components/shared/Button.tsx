import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: any;
}

const styles = {
  primary:
    'rounded-full bg-teal-400 py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-teal-300 active:bg-teal-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300/50 ',
  secondary:
    'rounded-full bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 active:text-gray-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 '
};

export const Button = (props: Props) => {
  const { href, children, variant = 'primary', className = '' } = props;

  return (
    <Link href={href}>
      <a className={styles[variant] + className}>{children}</a>
    </Link>
  );
};
