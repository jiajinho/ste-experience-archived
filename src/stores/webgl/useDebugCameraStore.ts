import { create } from "zustand";

type Store = {
  box: THREE.Mesh | null,
  set: (b: THREE.Mesh | null) => void
}

export default create<Store>((set) => ({
  box: null,
  set: (b) => set(() => ({
    box: b
  }))
}));