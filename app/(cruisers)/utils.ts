import { ICruiser } from "./page";

export const dropdownValues: {
  id: number;
  name: string;
  order: 'asc' | 'desc';
  key: 'price' | 'duration' | 'departureDate';
}[] = [
  {
    id: 0,
    name: 'Price',
    order: 'asc',
    key: 'price',
  },
  {
    id: 1,
    name: 'Price',
    order: 'desc',
    key: 'price',
  },
  {
    id: 2,
    name: 'Duration',
    order: 'asc',
    key: 'duration',
  },
  {
    id: 3,
    name: 'Duration',
    order: 'desc',
    key: 'duration',
  },
  {
    id: 4,
    name: 'Departure Date',
    order: 'asc',
    key: 'departureDate',
  },
  {
    id: 5,
    name: 'Departure Date',
    order: 'desc',
    key: 'departureDate',
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
