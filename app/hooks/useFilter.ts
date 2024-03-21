import { create } from "zustand";
interface ActiveFilterStore {
  Filters: { size: string; numberColumn: number; store: string; price: [0, 0] };
  add: (data: any) => void;
  remove: (data: any) => void;
  set: (ids: {
    size: string;
    numberColumn: number;
    store: string;
    price: [0, 0];
  }) => void;
  update: (data: any) => void;
}
const useActiveFilter = create<ActiveFilterStore>((set) => ({
  Filters: { size: "", numberColumn: 3, store: "", price: [0, 0] },
  add: (data) => set((state) => ({ Filters: { ...state.Filters, data } })),
  remove: (data) =>
    set((state) => ({ Filters: { ...state.Filters, price: [0, 0] } })),
  set: (ids) => set({ Filters: ids }),
  update: (data) =>
    set((state) => ({ Filters: { ...state.Filters, ...data } })),
}));
export default useActiveFilter;
