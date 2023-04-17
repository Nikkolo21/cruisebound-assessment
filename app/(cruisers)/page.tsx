import React from 'react';
import Cruiser from './Cruiser';

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
  const cruisers: ICruiser[] = await response.results;
  return cruisers;
}

export default async function CruisersList() {
  const cruisers = await getCruisers();

  return (
    <div className='max-w-4xl w-full mt-24'>
      { cruisers.map(cruiser => <Cruiser data={cruiser}/>) }
    </div>
  )
}
