import { persist,createJSONStorage} from "zustand/middleware";
import {create } from "zustand"
export interface ActiveCartStore {
  carts: any[];
  add: (data: any) => void;
  remove: (id: string) => void;
  set: (ids: any[]) => void;
  update: (id: string, data: any) => void;
}
const useActiveCart = create(persist((set) => ({
  carts: [],
  add: (data:any) => set((state:ActiveCartStore) => ({ carts:[...state.carts, data] })),
  remove: (id:string) =>
    set((state:ActiveCartStore) => ({
      carts: [...state?.carts?.filter((memberId,index) => memberId?.color?.name != id)],
    })),
  set: (ids:any[]) => set({ carts: ids }),
  update: (id:string, data:any) =>
    set((state:ActiveCartStore) => ({
      carts: [
        ...state.carts.map((cart) =>
          cart?.color?.name == id ? { ...cart, ...data } : cart
        ),
      ],
    })),
}),{
  name: "carts"
}));
export default useActiveCart;
