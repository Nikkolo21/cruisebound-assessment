import { create } from 'zustand';
import { ICruiser } from '@/app/utils/type';

export interface ICruisers {
  dividedCruisers: ICruiser[][];
  cruisers: ICruiser[];
  initialCruisers: ICruiser[];
  setCruisers: Function;
  setDividedCruisers: Function;
  setInitialCruisers: Function;
}

export const useCruiserStore = create<ICruisers>((set) => ({
  dividedCruisers: [],
  cruisers: [],
  initialCruisers: [],
  setCruisers: (cruisers: ICruiser[]) => set({ cruisers }),
  setInitialCruisers: (initialCruisers: ICruiser[]) => set({ initialCruisers }),
  setDividedCruisers: (dividedCruisers: ICruiser[][]) => set({ dividedCruisers }),
}));
