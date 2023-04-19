import React from 'react';

export default function Footer({ price }: { price: number }) {
  return (
    <div className='bg-tertiary w-full h-16 flex justify-end items-center px-4'>
      <div className='flex flex-col mr-4'>
        <span className='text-xs text-gray font-semibold'>Interior from</span>
        <div className='flex justify-end font-semibold text-xl'>
          <span className='text-xs self-start mt-1'>$</span>{price}
        </div>
      </div>
      <button className="bg-primary text-white px-3 py-2 rounded-md text-md">
        See sailings
      </button>
    </div>
  )
}
