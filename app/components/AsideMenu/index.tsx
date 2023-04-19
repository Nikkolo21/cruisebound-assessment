'use client';
import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filterCruiserList } from '@/app/utils';
import { ICruiser, ICruisersStore } from '@/app/utils/type';
import { useCruiserStore } from '@/app/store/cruisersStore';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function AsideMenu() {
  const port: string = useCruiserStore((state: ICruisersStore) => state.port);
  const setPort: Function = useCruiserStore((state: ICruisersStore) => state.setPort);
  const cruiseline: string = useCruiserStore((state: ICruisersStore) => state.cruiseline);
  const setCruiseline: Function = useCruiserStore((state: ICruisersStore) => state.setCruiseline);
  const setLocalCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setCruisers);
  const initialCruisers: ICruiser[] = useCruiserStore((state: ICruisersStore) => state.initialCruisers);
  const setLocalPaginatedCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setDividedCruisers);
  const setIsFiltered: Function = useCruiserStore((state: ICruisersStore) => state.setIsFiltered);

  const getCruisers = useCallback((filter: 'port' | 'cruiseline', value: string) => {
    const result = filterCruiserList(filter, value, initialCruisers);
    setLocalCruisers(result.filteredCruisers);
    setLocalPaginatedCruisers(result.paginatedCruisers);
  }, [initialCruisers, setLocalCruisers, setLocalPaginatedCruisers]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if(port.length > 0) {
        getCruisers("port", port);
        setIsFiltered(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [port, getCruisers, setIsFiltered])
  
  useEffect(() => {
    let timer = setTimeout(() => {
      if(cruiseline.length > 0) {
        getCruisers("cruiseline", cruiseline);
        setIsFiltered(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [cruiseline, getCruisers, setIsFiltered])

  const handlePort = (e: any) => {
    setPort(e.target.value);
  }

  const handleCruiseline = (e: any) => {
    setCruiseline(e.target.value);
  }

  return (
    <div className='h-[100vh] relative w-1/6 sm:w-1/4 md:w-3/12 sticky top-0 left-0'>
      <div className='flex flex-col justify-between h-full bg-secondary py-8 px-6'>
        <div>
          <div className='flex justify-end'>
            <div className='py-2 px-3 bg-secondaryBlue w-fit rounded-sm cursor-pointer'>
              <FontAwesomeIcon fixedWidth icon={faArrowLeft} color="white" />
            </div>
          </div>
          <form className='mt-8'>
            <label className='text-white'>Departure Port</label>
            <input onChange={handlePort} value={port} name="port" className='mb-4 w-full h-10 rounded-md px-4 mt-1 mb-4' placeholder='Any Port'/>
            <label className='text-white'>Cruiseline</label>
            <input onChange={handleCruiseline} value={cruiseline} name="cruiseline" className='mb-4 w-full h-10 rounded-md px-4 mt-1' placeholder='Any Ship'/>
          </form>
        </div>
        <Image className='my-0 mx-auto' alt="cruisebound" src="/cruise.svg" width={150} height={30} />
      </div>
    </div>
  )
}
