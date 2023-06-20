import { create } from "zustand";

type State = {
  dpr: number
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  dpr: 0.7,

  set: (key, value) => set((state) => {
    const clone = { ...state };
    clone[key] = value;

    return clone;
  })
}))