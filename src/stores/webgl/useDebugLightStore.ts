import { create } from "zustand";

type Store = {
  light: THREE.SpotLight | null,
  box: THREE.Mesh | null,
  set: (l: THREE.SpotLight | null, d: THREE.Mesh | null) => void
}

export default create<Store>((set) => ({
  light: null,
  box: null,
  set: (l, d) => set(() => ({
    light: l,
    box: d
  }))
}));