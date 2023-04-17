'use client';
import React, { useState } from 'react';
import Cruiser from './Cruiser';
import { ICruiser } from './page';

export default function Cruisers({ cruisers }: {cruisers: ICruiser[][]}) {
  const [page, setPage] = useState(0);

  return (
    <div className='max-w-4xl w-full py-12'>
      <div>
        { cruisers[page].map((cruiser, index) => <Cruiser key={cruiser.name} index={index} data={cruiser}/>) }
      </div>
      <div className='bg-tertiary px-6 py-2'>
        {cruisers.map((_, index) =>
          <span onClick={() => setPage(index)} className={`cursor-pointer mr-2 px-2 font-semibold ${page === index && 'bg-white rounded-full'}`}>
            { index + 1 }
          </span>
        )}
      </div>
    </div>
  )
}
