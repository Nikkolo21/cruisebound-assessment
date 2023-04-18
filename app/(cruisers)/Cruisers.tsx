'use client';
import React, { useEffect, useState } from 'react';
import Cruiser from './Cruiser';
import Pagination from './Pagination';
import { sortCruiserList } from './utils';
import { ICruiser, IListedCruisers } from './page';
import Dropdown from '../components/Dropdown';

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
        <Dropdown onChange={(value: any) => setOption(value)} />
      </div>
      <div>
        {
          localCruisers[page]?.map((
          cruiser: ICruiser, index: number) =>
            <Cruiser key={`${index}-${cruiser.name}`} index={index} data={cruiser}/>
        )}
      </div>
      <Pagination onClick={setPage} page={page} cruisers={localCruisers} />
    </div>
  )
}
