import { create } from 'zustand';
import {
  FILTER_STATE,
  FilterStateType,
} from '@/entities/filter/model/types.ts';

export const useFilterStore = create<FilterStateType>((set) => ({
  filter: FILTER_STATE.ALL,
  updateFilter: (filter) => set(() => ({ filter })),
}));
