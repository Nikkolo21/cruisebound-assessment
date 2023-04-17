'use client'
import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import { ICruiser } from './page';

export default function Cruiser({ data, index } : {data: ICruiser, index: number}) {
  return (
    <div className='flex flex-col mb-12 rounded-xl shadow-lg overflow-hidden cursor-pointer w-full md:flex-row md:min-h-45'>
      <div className={`w-full h-54 md:w-96 relative md:h-54 ${!data.ship.image && 'bg-darkerGray'}`}>
        { data.ship.image && <Image alt={data.ship.name} src={data.ship.image} fill /> }
        <div className='absolute top-3 left-3 text-white px-2 py-1 text-sm rounded-sm' style={{backgroundColor: 'rgba(10, 10, 10, 0.8)'}}>{data.departureDate} - {data.returnDate}</div>
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div className='py-4 px-6 flex justify-between'>
          <div className='flex flex-col w-112 justify-between'>
            <div className='text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden capitalize'>
              <span className=''>
                {data.name}
              </span>
            </div>
            <div className='flex mt-2'>
              <div className='text-darkerGray font-semibold mr-4'>{data.region}</div>
              <div className='text-darkerGray font-semibold mr-4'>{data.duration} nights</div>
              <div className='flex items-center'>
                <div className='mr-1'>
                  <Image alt="rating star" src="/star.png" width={18} height={8}/>
                </div>
                <div className='text-sm font-semibold'>
                  {data.ship.rating}
                </div>
              </div>
              <div className='text-xs text-gray flex items-center ml-1 font-semibold'>
                <span>
                  {data.ship.reviews} reviews
                </span>
              </div>
            </div>
            <div className='mt-2 h-12 overflow-auto'>
              {
                data.itinerary.map(it => (
                  <span key={`${index}-${it}`} className='flex-inline'>{it} <span className='text-blue'>&#8594;</span> </span>
                ))
              }
            </div>
          </div>
          <div className='relative w-30 h-12 flex flex-col'>
            <div className='flex justify-end'>
              {
                data?.ship?.line?.logo &&
                  <Image width={80} height={0} alt={data.ship.line.name} src={data.ship.line.logo} />
              }
            </div>
            <div className='text-xs text-gray text-right font-semibold mt-1'>{data.ship.line.name}</div>
          </div>
        </div>

        <div className='bg-tertiary w-full h-16 flex justify-end items-center px-4'>
          <div className='flex flex-col mr-4'>
            <span className='text-xs text-gray font-semibold'>Interior from</span>
            <div className='flex justify-end font-semibold text-lg'>
              <span className='text-xs self-start mt-1'>$</span>{data.price}
            </div>
          </div>
          <Button>
            See sailings
          </Button>
        </div>
      </div>
    </div>
  )
}
