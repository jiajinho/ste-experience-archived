import { create } from "zustand";

import type { Hotspot, Zoom } from "types";
import config from "config";

type Store = {
  zoomProps: { [h in Hotspot]: Zoom },
  updateZoomProps: (h: Hotspot, z: Zoom) => void,

  currentZoom: Hotspot,
  setCurrentZoom: (h: Hotspot) => void,

  goNextZoom: () => void,
  goPrevZoom: () => void
}

export default create<Store>((set) => ({
  zoomProps: config.zoomProps,
  updateZoomProps: (h, z) => set((state) => {
    const clone = { ...state.zoomProps };
    clone[h] = z;

    return { zoomProps: clone }
  }),

  currentZoom: "default",
  setCurrentZoom: (h) => set(() => ({
    currentZoom: h
  })),

  goNextZoom: () => set((state) => {
    const keys = Object.keys(state.zoomProps);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (++index > keys.length - 1) {
      index = 0;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
  goPrevZoom: () => set((state) => {
    const keys = Object.keys(state.zoomProps);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (--index < 0) {
      index = keys.length - 1;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
}));