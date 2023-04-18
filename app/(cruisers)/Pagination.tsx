import React, { Dispatch, SetStateAction } from 'react';
import { ICruiser } from './page';

export default function Pagination({
  onClick,
  page,
  cruisers
} : {
  onClick: Dispatch<SetStateAction<number>>;
  page: number;
  cruisers: ICruiser[][];
}) {
  return (
    <div className='bg-tertiary px-6 py-2 w-fit'>
      {cruisers?.map((_, index) =>
        <span
          key={index}
          onClick={() => onClick(index)}
          className={`cursor-pointer mx-1 px-2 font-semibold ${page === index && 'bg-white rounded-full'}`}
        >
          { index + 1 }
        </span>
      )}
    </div>
  )
}
