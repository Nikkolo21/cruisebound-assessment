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

async function getCruisers() {
  const data = await fetch(`${process.env.CRUISEBOUND_API_BASE}/sailings`);
  const response = await data.json();
  const cruisers: ICruiser[][] = await response.results;
  return chunkArray(cruisers, 10);
}

export default async function CruisersList() {
  const cruisers: ICruiser[][] = await getCruisers();

  return (
    <Cruisers cruisers={cruisers} />
  )
}
