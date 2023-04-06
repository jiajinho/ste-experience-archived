import { create } from "zustand";

type State = {
  box: THREE.Object3D | null,
  target: THREE.Object3D | null,
}

type Store = State & {
  set: <T extends keyof State>(k: T, v: State[T]) => void
}

export default create<Store>((set) => ({
  box: null,
  target: null,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));