import React, { Fragment } from 'react';
import Link from 'next/link';

export const Socials = () => {
  return (
    <div className='flex space-x-4 items-center justify-start'>
      <SocialLinks sm={true} />
    </div>
  );
};

const SocialLinks = ({ sm = false }) => {
  return (
    <Fragment>
      <Link href='https://soulaymane.dev'>
        <a target='_blank' rel='noreferrer'>
          <Svg sm={sm}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </Svg>
        </a>
      </Link>

      <Link href='https://www.linkedin.com/in/soulaymaneabiadou'>
        <a target='_blank' rel='noreferrer'>
          <Svg sm={sm}>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <rect x={4} y={4} width={16} height={16} rx={2}></rect>
            <line x1={8} y1={11} x2={8} y2={16}></line>
            <line x1={8} y1={8} x2={8} y2='8.01'></line>
            <line x1={12} y1={16} x2={12} y2={11}></line>
            <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
          </Svg>
        </a>
      </Link>

      <Link href='https://github.com/soulaymaneabiadou/codestyleguide'>
        <a target='_blank' rel='noreferrer'>
          <Svg sm={sm}>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
          </Svg>
        </a>
      </Link>
    </Fragment>
  );
};

const Svg = ({ children, sm }: any) => {
  return (
    <svg
      className={`text-gray-500 hover:text-white duration-100 ease-in-out ${
        sm ? `h-8 w-8` : `h-10 w-10`
      }`}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      {children}
    </svg>
  );
};
