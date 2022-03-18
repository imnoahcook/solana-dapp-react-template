import create, { State } from 'zustand';
import produce from 'immer';

export interface Store extends State {
  solBalance: number;
  set: (fn: (store: Store) => void) => void;
}

const useStore = create<Store>((set, get) => ({
  set: (fn) => set(produce(fn)),
  solBalance: 0,
}));

export default useStore;
