'use client';
import React from 'react';
import AsideMenu from '../components/AsideMenu';

export default function CruiserLayout({children}: { children: React.ReactNode } ) {
  return (
    <div className='flex relative w-full'>
      <AsideMenu/>
      <div className='flex justify-center w-5/6 sm:w-3/4 md:w-9/12'>
        {children}
      </div>
    </div>
  )
}
