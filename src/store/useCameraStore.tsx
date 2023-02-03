import { create } from "zustand";
import THREE from "three";

type Store = {
  current?: THREE.PerspectiveCamera,
  setCurrent: (c: THREE.PerspectiveCamera) => void,
  cameras: THREE.PerspectiveCamera[],
  setCameras: (c: THREE.PerspectiveCamera[]) => void
}

export default create<Store>((set) => ({
  current: undefined,
  setCurrent: c => set({ current: c }),
  cameras: [],
  setCameras: c => set({ cameras: c })
}));