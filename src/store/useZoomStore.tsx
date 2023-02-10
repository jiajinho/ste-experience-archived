import { create } from "zustand";
import { ZoomObject } from "types";

type Store = {
  currentZoom?: ZoomObject,
  setZoomTarget: (z: ZoomObject | undefined) => void
}

export default create<Store>((set) => ({
  currentZoom: undefined,
  setZoomTarget: (z) => set(() => ({
    currentZoom: z
  }))
}));