import React from 'react';

export default function Ports({ itinerary, index }: {itinerary: string[]; index: number}) {
  return (
    <div className='mt-2 h-12 overflow-auto'>
      {
        itinerary.map((it, i) => (
          <span key={`${index}-${it}`} className='flex-inline text-sm font-semibold'>{it}
            { i + 1 !== itinerary.length && <span className='mx-2 text-blue'>&#8594;</span> }
          </span>
        ))
      }
    </div>
  )
}
