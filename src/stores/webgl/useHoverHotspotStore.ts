import { create } from "zustand";

export type State = {
  layer1: boolean,
  layer2: boolean,
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  layer1: false,
  layer2: false,

  set: (key, value) => set((state) => {
    const clone = { ...state };
    clone[key] = value;

    return clone;
  })
}));