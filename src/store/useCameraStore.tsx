import { create } from "zustand";
import { Hotspot } from "types";

type Store = {
  hotspot: Hotspot,
  object: THREE.Group | null
  set: (h: Hotspot, o: THREE.Group | null) => void
}

export default create<Store>((set) => ({
  hotspot: "default",
  object: null,
  set: (h, o) => set(() => ({
    hotspot: h,
    object: o
  }))
}));