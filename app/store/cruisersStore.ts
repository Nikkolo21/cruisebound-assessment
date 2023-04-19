import { create } from 'zustand';
import { ICruiser, ICruisersStore } from '@/app/utils/type';

export const useCruiserStore = create<ICruisersStore>((set) => ({
  port: "",
  page: 0,
  cruiseline: "",
  dividedCruisers: [],
  cruisers: [],
  initialCruisers: [],
  isFiltered: false,
  setPort: (port: string) => set({ port }),
  setPage: (page: number) => set({ page }),
  setCruiseline: (cruiseline: string) => set({ cruiseline }),
  setCruisers: (cruisers: ICruiser[]) => set({ cruisers }),
  setInitialCruisers: (initialCruisers: ICruiser[]) => set({ initialCruisers }),
  setDividedCruisers: (dividedCruisers: ICruiser[][]) => set({ dividedCruisers }),
  setIsFiltered: (isFiltered: boolean) => set({ isFiltered }),
}));
