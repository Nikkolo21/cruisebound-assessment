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

export interface ICruisersStore {
  dividedCruisers: ICruiser[][];
  cruisers: ICruiser[];
  initialCruisers: ICruiser[];
  setCruisers: Function;
  setDividedCruisers: Function;
  setInitialCruisers: Function;
}
