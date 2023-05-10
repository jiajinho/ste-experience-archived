import { create } from "zustand";
import type { Card } from "types";

type State = {
  htmlEvent: Card.Event,
  webglEvent: Card.Event,
  flippedEncounter: boolean,
  flippedWhenWhere: boolean
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  htmlEvent: undefined,
  webglEvent: undefined,
  flippedEncounter: false,
  flippedWhenWhere: false,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));