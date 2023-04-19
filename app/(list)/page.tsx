import React from 'react';
import { ICruiser, IListedCruisers } from '@/app/utils/type';
import CruisersList from '../components/CruisersList';
import { chunkArray } from '../utils';

async function getCruisers() {
  const data = await fetch(`${process.env.CRUISEBOUND_API_BASE}/sailings`, { cache: 'no-store' });
  const response = await data.json();
  const allCruisers: ICruiser[] = await response.results;
  return { allCruisers, dividedCruisers: chunkArray(allCruisers, 10) };
}

export default async function CruisersPage() {
  const cruisers: IListedCruisers = await getCruisers();

  return (
    <CruisersList cruisers={cruisers} />
  )
}
