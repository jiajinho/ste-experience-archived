import { create } from "zustand";
import type { Merch, Card } from "types";

type State = {
  htmlEvent: Card.Event,
  webglEvent: Card.Event,

  merch?: Merch
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  htmlEvent: undefined,
  webglEvent: undefined,

  merch: undefined,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));