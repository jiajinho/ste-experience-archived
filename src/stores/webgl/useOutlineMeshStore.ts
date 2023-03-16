import { create } from "zustand";

type Store = {
  meshes: THREE.Mesh[],
  set: (m: THREE.Mesh[]) => void
}

export default create<Store>((set) => ({
  meshes: [],
  set: (m) => set(() => ({
    meshes: m
  }))
}));