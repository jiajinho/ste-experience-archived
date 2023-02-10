import { create } from "zustand";

type Store = {
  mesh?: THREE.Mesh | null,
  set: (m: THREE.Mesh | null | undefined) => void
}

export default create<Store>((set) => ({
  mesh: undefined,
  set: (m) => set(() => ({
    mesh: m
  }))
}));