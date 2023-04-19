'use client';
import React from 'react';
import { useCruiserStore } from '@/app/store/cruisersStore';
import { ICruiser, ICruisersStore } from '@/app/utils/type';

export default function FilteredSection() {
  const localCruisers: ICruiser[] = useCruiserStore((state: ICruisersStore) => state.cruisers);
  const initialCruisers: ICruiser[] = useCruiserStore((state: ICruisersStore) => state.initialCruisers);
  const setLocalCruisers: Function = useCruiserStore((state: ICruisersStore) => state.setCruisers);
  const setIsFiltered: Function = useCruiserStore((state: ICruisersStore) => state.setIsFiltered);
  const setPort: Function = useCruiserStore((state: ICruisersStore) => state.setPort);
  const setCruiseline: Function = useCruiserStore((state: ICruisersStore) => state.setCruiseline);

  const resetFilters = () => {
    setIsFiltered(false);
    setPort("");
    setCruiseline("");
    setLocalCruisers(initialCruisers);
  }

  return (
    <div className='flex'>
      <div className='font-semibold mt-1'>
        <span>{localCruisers.length} trips found</span>
      </div>
      <button
        onClick={resetFilters}
        className='ml-4 text-sm border border-gray rounded-md h-fit px-2 py-1'>
          Reset filters
      </button>
    </div>
  )
}
