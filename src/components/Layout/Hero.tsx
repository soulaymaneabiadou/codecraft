import React from 'react';
import { Button } from '@components/shared';

export const Hero = () => {
  return (
    <div className=''>
      <div className='py-16 sm:px-2 lg:relative lg:py-20 mx-auto max-w-2xl items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12'>
        <div className='relative z-0 mx-auto max-w-2xl md:text-center'>
            <p className='inline text-white text-5xl tracking-normal font-medium'>
              Coding Style Guide.
            </p>
            <p className='mt-3 text-2xl tracking-normal text-gray-400 max-w-xl mx-auto'>
              Because crafting software is more than translating business needs
              into code.
            </p>
            <div className='mt-8 flex space-x-4 md:justify-center'>
              <Button href='/docs/basics/naming'>
                Explore Docs
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};
