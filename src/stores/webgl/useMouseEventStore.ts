import { create } from "zustand";
import { Camera } from "@/types";

type State = {
  event?: Camera.MouseEvent
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  event: undefined,

  set: (key, value) => set((state) => {
    const clone = { ...state };
    clone[key] = value;

    return clone;
  })
}));