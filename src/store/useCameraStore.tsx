import { create } from "zustand";

import type { Hotspot, Zoom } from "types";
import config from "config";

type Store = {
  zoomChoices: { [h in Hotspot]: Zoom },
  updateZoomChoices: (h: Hotspot, z: Zoom) => void,

  currentZoom: Zoom,
  setCurrentZoom: (h: Hotspot) => void
}

export default create<Store>((set) => ({
  zoomChoices: config.zoomChoices,
  updateZoomChoices: (h, z) => set((state) => {
    const clone = { ...state.zoomChoices };
    clone[h] = z;

    return { zoomChoices: clone }
  }),

  currentZoom: config.zoomChoices.default,
  setCurrentZoom: (h) => set((state) => ({
    currentZoom: state.zoomChoices[h]
  }))
}));