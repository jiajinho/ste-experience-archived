import { create } from "zustand";
import type { Event } from "@html/CardOverlay/types";

type State = {
  htmlEvent: Event,
  webglEvent: Event,
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