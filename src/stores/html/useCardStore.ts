import { create } from "zustand";
import type { Event } from "@html/CardOverlay/types";

type State = {
  event: Event,
  flippedEncounter: boolean,
  flippedWhenWhere: boolean
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  event: undefined,
  flippedEncounter: false,
  flippedWhenWhere: false,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));