import { persist,createJSONStorage} from "zustand/middleware";
import {create } from "zustand"
export interface ActiveCartStore {
    categories: any[];
  add: (data: any) => void;
  remove: (id: string) => void;
  set: (ids: any[]) => void;
  update: (id: string, data: any) => void;
}
const useActiveCategory = create(persist((set) => ({
  categories: [],
  add: (data:any) => set((state:ActiveCartStore) => ({ categories:[...state.categories, data] })),
  remove: (id:string) =>
    set((state:ActiveCartStore) => ({
        categories: [...state?.categories?.filter((memberId,index) => memberId.slug != id)],
    })),
  set: (ids:any[]) => set({ categories: ids }),
  update: (id:string, data:any) =>
    set((state:ActiveCartStore) => ({
        categories: [
        ...state.categories.map((cart) =>
          cart?.slug == id ? { ...cart, ...data } : cart
        ),
      ],
    })),
}),{
  name: "categories"
}));
export default useActiveCategory;
