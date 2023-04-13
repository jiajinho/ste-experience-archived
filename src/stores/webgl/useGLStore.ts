import { create } from "zustand";

type State = {
  dpr: number,
  fps: number,
  test: string
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void
}

export default create<Store>((set) => ({
  dpr: 2,
  fps: 0,

  test: "",

  set: (key, value) => set((state) => {
    const clone = { ...state };
    //@ts-ignore
    clone[key] = value;

    return clone;
  })
}))