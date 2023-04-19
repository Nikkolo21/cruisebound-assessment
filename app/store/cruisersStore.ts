import { create } from 'zustand';
import { ICruiser, ICruisersStore } from '@/app/utils/type';

export const useCruiserStore = create<ICruisersStore>((set) => ({
  dividedCruisers: [],
  cruisers: [],
  initialCruisers: [],
  setCruisers: (cruisers: ICruiser[]) => set({ cruisers }),
  setInitialCruisers: (initialCruisers: ICruiser[]) => set({ initialCruisers }),
  setDividedCruisers: (dividedCruisers: ICruiser[][]) => set({ dividedCruisers }),
}));
