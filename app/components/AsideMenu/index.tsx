'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ICruiser, ICruisersStore } from '@/app/utils/type';
import { filterCruiserList } from '@/app/utils';
import { useCruiserStore } from '@/app/store/cruisersStore';

export default function AsideMenu() {
  const [port, setPort] = useState("");
  const [cruiseline, setCruiseline] = useState("");
  const setLocalCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setCruisers);
  const initialCruisers: ICruiser[] = useCruiserStore((state: ICruisersStore) => state.initialCruisers);
  const setLocalPaginatedCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setDividedCruisers);

  const getCruisers = useCallback((filter: 'port' | 'cruiseline', value: string) => {
    const result = filterCruiserList(filter, value, initialCruisers);
    setLocalCruisers(result.filteredCruisers);
    setLocalPaginatedCruisers(result.paginatedCruisers);
  }, [initialCruisers, setLocalCruisers, setLocalPaginatedCruisers]);

  useEffect(() => {
    let timer = setTimeout(() => {
      port.length > 0 && getCruisers("port", port);
    }, 500);

    return () => clearTimeout(timer);
  }, [port, getCruisers])
  
  useEffect(() => {
    let timer = setTimeout(() => {
      cruiseline.length > 0 && getCruisers("cruiseline", cruiseline);
    }, 500);

    return () => clearTimeout(timer);
  }, [cruiseline, getCruisers])

  const handlePort = (e: any) => {
    setPort(e.target.value);
  }

  const handleCruiseline = (e: any) => {
    setCruiseline(e.target.value);
  }

  return (
    <div className='h-[100vh] relative w-1/6 sm:w-1/4 md:w-3/12 sticky top-0 left-0'>
      <div className='flex flex-col justify-between h-full bg-secondary py-8 px-6'>
        <form>
          <label className='text-white'>Departure Port</label>
          <input onChange={handlePort} name="port" className='mb-4 w-full h-10 rounded-md px-4 mt-1 mb-4' placeholder='Any Port'/>
          <label className='text-white'>Cruiseline</label>
          <input onChange={handleCruiseline} name="cruiseline" className='mb-4 w-full h-10 rounded-md px-4 mt-1' placeholder='Any Ship'/>
        </form>
        <Image className='my-0 mx-auto' alt="cruisebound" src="/cruise.svg" width={150} height={30} />
      </div>
    </div>
  )
}
