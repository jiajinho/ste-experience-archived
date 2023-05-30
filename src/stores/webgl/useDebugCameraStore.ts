import { create } from "zustand";
import { Camera } from "@/types";

type State = {
  box: THREE.Object3D | null,
  target: THREE.Object3D | null,
  hotspot: Camera.Hotspot | null
}

type Store = State & {
  set: <T extends keyof State>(k: T, v: State[T]) => void
}

export default create<Store>((set) => ({
  box: null,
  target: null,
  hotspot: null,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}));