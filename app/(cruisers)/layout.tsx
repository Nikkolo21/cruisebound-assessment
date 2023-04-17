import React from 'react';
import Image from 'next/image';

export default function cruiserLayout({children}: { children: React.ReactNode } ) {
  return (
    <div className='flex relative w-full'>
      <div className='h-[100vh] text-white relative w-1/6 sm:w-1/4 md:w-3/12 sticky top-0 left-0'>
        <div className='flex flex-col justify-between h-full bg-secondary p-8'>
          <div>Here is the form</div>
          <Image className='my-0 mx-auto' alt="cruisebound" src="/cruise.svg" width={150} height={30} />
        </div>
      </div>
      <div className='flex justify-center w-5/6 sm:w-3/4 md:w-9/12'>
        {children}
      </div>
    </div>
  )
}
