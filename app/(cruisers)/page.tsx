import React from 'react';
import Cruisers from './Cruisers';
import { chunkArray } from './utils';

export interface ICruiser {
  price: number
  name: string
  ship: IShip
  itinerary: string[]
  region: string
  departureDate: string
  returnDate: string
  duration: number
}

interface IShip {
  name: string
  rating: number
  reviews: number
  image: string
  line: ILine
}

interface ILine {
  logo: string
  name: string
}

export interface IListedCruisers {
  allCruisers: ICruiser[];
  dividedCruisers: ICruiser[][];
}

async function getCruisers() {
  const data = await fetch(`${process.env.CRUISEBOUND_API_BASE}/sailings`, { cache: 'no-store' });
  const response = await data.json();
  const allCruisers: ICruiser[] = await response.results;
  return { allCruisers, dividedCruisers: chunkArray(allCruisers, 10) };
}

export default async function CruisersList() {
  const cruisers: IListedCruisers = await getCruisers();

  return (
    <Cruisers cruisers={cruisers} />
  )
}
