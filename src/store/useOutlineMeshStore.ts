import { create } from "zustand";

type Store = {
  meshs: THREE.Object3D[],
  add: (m: THREE.Object3D) => void,
  remove: (m: THREE.Object3D) => void
}

export default create<Store>((set) => ({
  meshs: [],
  add: (m) => set((state) => {
    const clone = [...state.meshs, m];
    return { meshs: clone };
  }),
  remove: (m) => set((state) => {
    const clone = [...state.meshs].filter(c => c !== m, []);
    return { meshs: clone };
  })
}));