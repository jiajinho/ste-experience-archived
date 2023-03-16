import { create } from "zustand";

type Store = {
  group?: THREE.Group | null,
  set: (m: THREE.Group | null | undefined) => void
}

export default create<Store>((set) => ({
  group: undefined,
  set: (m) => set(() => ({
    group: m
  }))
}));