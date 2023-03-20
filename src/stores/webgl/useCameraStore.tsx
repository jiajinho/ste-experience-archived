import { create } from "zustand";

import type { Hotspot, Zoom } from "types";
import config from "config";

type Store = {
  camera?: THREE.Camera,
  setCamera: (c: THREE.Camera) => void,

  shadowCamera?: THREE.PerspectiveCamera,
  setShadowCamera: (c: THREE.PerspectiveCamera) => void,

  cameraPan: boolean,
  setCameraPan: (b: boolean) => void,

  zoomSettings: { [h in Hotspot]: Zoom },
  updateZoomSettings: (h: Hotspot, z: Zoom) => void,

  currentZoom: Hotspot,
  setCurrentZoom: (h: Hotspot) => void,

  goNextZoom: () => void,
  goPrevZoom: () => void
}

export default create<Store>((set) => ({
  camera: undefined,
  setCamera: c => set(({ camera: c })),

  shadowCamera: undefined,
  setShadowCamera: c => set(({ shadowCamera: c })),

  cameraPan: false,
  setCameraPan: b => set(({
    cameraPan: b
  })),

  zoomSettings: config.zoomSettings,
  updateZoomSettings: (h, z) => set((state) => {
    const clone = { ...state.zoomSettings };
    clone[h] = z;

    return { zoomSettings: clone }
  }),


  currentZoom: "default",
  setCurrentZoom: (h) => set(() => ({
    currentZoom: h
  })),


  goNextZoom: () => set((state) => {
    const keys = Object.keys(state.zoomSettings);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (++index > keys.length - 1) {
      index = 0;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
  goPrevZoom: () => set((state) => {
    const keys = Object.keys(state.zoomSettings);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (--index < 0) {
      index = keys.length - 1;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
}));