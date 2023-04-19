import { ICruiser } from "@/app/utils/type";

export const dropdownValues: {
  id: number;
  name: string;
  order: 'asc' | 'desc';
  key: 'price' | 'duration' | 'departureDate';
  value: any;
}[] = [
  {
    id: 0,
    name: 'Price',
    order: 'asc',
    key: 'price',
    value: 0,
  },
  {
    id: 1,
    name: 'Price',
    order: 'desc',
    key: 'price',
    value: 1,
  },
  {
    id: 2,
    name: 'Duration',
    order: 'asc',
    key: 'duration',
    value: 2,
  },
  {
    id: 3,
    name: 'Duration',
    order: 'desc',
    key: 'duration',
    value: 3,
  },
  {
    id: 4,
    name: 'Departure Date',
    order: 'asc',
    key: 'departureDate',
    value: 4,
  },
  {
    id: 5,
    name: 'Departure Date',
    order: 'desc',
    key: 'departureDate',
    value: 5,
  },
];

export function chunkArray(arr: any[], chunkCount: number) {
  const result = arr.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunkCount)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
  return result;
}

export function sortCruiserList({
  cruisers,
  option,
}:{
  cruisers: ICruiser[];
  option: number; 
}) {
  const { order, key } = dropdownValues[option];

  const sortedCruisers = [...cruisers].sort((a, b) => {
    const prev = {...a};
    const curr = {...b};

    if(key === 'departureDate') {
      prev[key] = prev[key].split('-').join('');
      curr[key] = curr[key].split('-').join('');
    }

    if(order === 'desc') {
      return parseFloat(`${curr[key]}`) - parseFloat(`${prev[key]}`)
    }
    return parseFloat(`${prev[key]}`) - parseFloat(`${curr[key]}`)
  });

  return chunkArray(sortedCruisers, 10);
}

export function filterCruiserList(
  port: string,
  cruiseline: string,
  cruisers: ICruiser[],
) {
  const filteredCruisers = cruisers.filter(cruiser =>
    cruiser?.itinerary?.[0]?.toLowerCase().includes(port.toLocaleLowerCase()) &&
    cruiser.ship.line.name.toLocaleLowerCase().includes(cruiseline.toLocaleLowerCase())
  );

  return {
    filteredCruisers,
    paginatedCruisers: chunkArray(filteredCruisers, 10),
  };
}
