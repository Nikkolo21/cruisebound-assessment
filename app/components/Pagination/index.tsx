'use client';
import React from 'react';
import { ICruiser, ICruisersStore } from '@/app/utils/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useCruiserStore } from '@/app/store/cruisersStore';

export default function Pagination({
  cruisers
} : {
  cruisers: ICruiser[][];
}) {
  const page: number = useCruiserStore((state: ICruisersStore) => state.page);
  const setPage: Function = useCruiserStore((state: ICruisersStore) => state.setPage);

  const handlePage = (type: 'up' | 'down') => {
    if (type === 'up') {
      page < cruisers.length - 1 && setPage(page + 1);
    } else {
      page > 0 && setPage(page - 1);
    }
  }

  return (
    <div className='bg-tertiary px-6 py-2 w-fit'>
      <FontAwesomeIcon onClick={() => handlePage('down')} opacity={page === 0 ? 0.5 : 1} className='mr-2 cursor-pointer' icon={faAngleLeft} color="#327FFE" />
      {cruisers?.map((_, index) =>
        <span
          key={index}
          onClick={() => setPage(index)}
          className={`cursor-pointer mx-1 px-2 font-semibold ${page === index && 'bg-white rounded-full'}`}
        >
          { index + 1 }
        </span>
      )}
      <FontAwesomeIcon onClick={() => handlePage('up')} opacity={page === cruisers.length - 1 ? 0.5 : 1} className='ml-2 cursor-pointer' icon={faAngleRight} color="#327FFE" />
    </div>
  )
}
