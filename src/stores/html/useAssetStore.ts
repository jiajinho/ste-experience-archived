import { create } from "zustand";
import type { Asset } from "types";

type State = {
  [k in Asset.Image]: boolean;
}

type Store = State & {
  loaded: number,
  incrementLoaded: () => void,
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  merchVecna: false,
  merchEleven: false,

  loaded: 0,
  incrementLoaded: () => set((state) => ({
    loaded: state.loaded + 1
  })),

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));