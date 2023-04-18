'use client';
import React, { useEffect, useState } from 'react';
import Cruiser from './Cruiser';
import Pagination from './Pagination';
import { dropdownValues, sortCruiserList } from './utils';
import { ICruiser, IListedCruisers } from './page';

export default function Cruisers({ cruisers }: { cruisers: IListedCruisers }) {
  const [page, setPage] = useState(0);
  const [option, setOption] = useState(0);
  const [localCruisers, setLocalCruisers] = useState<ICruiser[][]>([]);

  useEffect(() => {
    setLocalCruisers(cruisers.dividedCruisers);
    sortCruiserList({cruisers: cruisers.allCruisers, option});
  }, []);

  useEffect(() => {
    setPage(0);
    setLocalCruisers(
      sortCruiserList({cruisers: cruisers.allCruisers, option})
    );
  }, [option, setLocalCruisers, sortCruiserList]);

  return (
    <div className='max-w-4xl w-full py-12'>
      <div className='flex justify-end mb-12'>
        <select name="cruisers" id="cruisers" onChange={e => setOption(+e.target.value)}>
          {
            dropdownValues.map(value => (
              <option key={value.id} className='flex flex-col' value={value.id}>
                <>{value.name} ({value.order === 'asc' ? 'Lowest First': 'Highest First'})</>
              </option>
            ))
          }
        </select>
      </div>
      <div>
        {
          localCruisers[page]?.map((cruiser: ICruiser, index: number) => <Cruiser key={`${index}-${cruiser.name}`} index={index} data={cruiser}/>)
        }
      </div>
      <Pagination onClick={setPage} page={page} cruisers={localCruisers} />
    </div>
  )
}
