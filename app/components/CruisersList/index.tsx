'use client';
import React, { useEffect, useState } from 'react';
import { ICruiser, ICruisersStore, IListedCruisers } from '@/app/utils/type';
import { useCruiserStore } from '@/app/store/cruisersStore';
import { sortCruiserList } from '@/app/utils';
import Pagination from '../Pagination';
import Dropdown from '../Dropdown';
import CruiserCard from '../CruiserCard';
import FilteredSection from '../FilteredSection';

export default function CruisersList({ cruisers }: { cruisers: IListedCruisers }) {
  const [option, setOption] = useState(0);
  const page: number = useCruiserStore((state: ICruisersStore) => state.page);
  const setPage: Function = useCruiserStore((state: ICruisersStore) => state.setPage);
  const isFiltered: boolean = useCruiserStore((state: ICruisersStore) => state.isFiltered);
  const setInitialCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setInitialCruisers);
  const setLocalCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setCruisers);
  const localCruisers: ICruiser[] = useCruiserStore((state: ICruisersStore) => state.cruisers);
  const localDividedCruisers: ICruiser[][] = useCruiserStore((state: ICruisersStore) => state.dividedCruisers);
  const setLocalDividedCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setDividedCruisers);

  useEffect(() => {
    setLocalDividedCruisers(cruisers.dividedCruisers);
    setLocalCruisers(cruisers.allCruisers);
    setInitialCruisers(cruisers.allCruisers);
  }, [setInitialCruisers, setLocalCruisers, setLocalDividedCruisers, cruisers.allCruisers, cruisers.dividedCruisers]);

  useEffect(() => {
    setPage(0);
    setLocalDividedCruisers(
      sortCruiserList({cruisers: localCruisers, option})
    );
  }, [option, setLocalDividedCruisers, localCruisers, setPage]);

  return (
    <div className='max-w-4xl w-full py-12'>
      <div className='flex justify-between mb-12'>
        <div>{ isFiltered && <FilteredSection /> }</div>
        { localDividedCruisers.length > 0 && <Dropdown onChange={(value: any) => setOption(value)} /> }
      </div>
      <div>
        {
          localDividedCruisers[page]?.map((
          cruiser: ICruiser, index: number) =>
            <CruiserCard key={`${index}-${cruiser.name}`} index={index} data={cruiser}/>
        )}
      </div>
      <Pagination cruisers={localDividedCruisers} />
    </div>
  )
}
