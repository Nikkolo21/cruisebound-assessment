import React from 'react';
import Image from 'next/image';
import { ICruiser } from '@/app/utils/type';
import Ports from './Ports';
import Footer from './Footer';

export default function CruiserCard({ data, index } : {data: ICruiser, index: number}) {
  return (
    <div className='flex flex-col mb-12 rounded-xl shadow-lg overflow-hidden cursor-pointer w-full md:flex-row md:min-h-45'>
      <div className={`w-full h-54 md:w-48 lg:w-96 relative md:h-54 ${!data.ship.image && 'bg-darkerGray'}`}>
        { data.ship.image && <Image alt={data.ship.name} src={data.ship.image} fill /> }
        <div className='absolute top-3 left-3 text-white px-2 py-1 text-sm rounded-sm' style={{backgroundColor: 'rgba(10, 10, 10, 0.8)'}}>{data.departureDate} - {data.returnDate}</div>
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div className='py-4 px-6 flex justify-between'>
          <div className='flex flex-col w-112 justify-between'>
            <div className='text-2xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden capitalize'>
              <span>
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
            <Ports itinerary={data.itinerary} index={index}/>
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
        <Footer price={data.price}/>
      </div>
    </div>
  )
}
