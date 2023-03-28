import { create } from "zustand";

import type { Hotspot, Zoom } from "types";
import config from "config";

type State = {
  camera?: THREE.PerspectiveCamera,
  shadowCamera?: THREE.PerspectiveCamera,
  cameraPan: boolean,
  currentZoom: Hotspot
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void

  // zoomSettings: { [h in Hotspot]: Zoom },
  // updateZoomSettings: (h: Hotspot, z: Zoom) => void,

  goNextZoom: () => void,
  goPrevZoom: () => void
}

export default create<Store>((set) => ({
  //#region Basic states
  camera: undefined,
  shadowCamera: undefined,
  cameraPan: false,
  currentZoom: "default",

  set: (key, value) => set((state) => {
    const clone = { ...state };
    //@ts-ignore
    clone[key] = value;

    return clone;
  }),
  //#endregion

  // zoomSettings: config.zoomSettings,
  // updateZoomSettings: (h, z) => set((state) => {
  //   const clone = { ...state.zoomSettings };
  //   clone[h] = z;

  //   return { zoomSettings: clone }
  // }),

  goNextZoom: () => set((state) => {
    const keys = Object.keys(config.zoomSettings);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (++index > keys.length - 1) {
      index = 0;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
  goPrevZoom: () => set((state) => {
    const keys = Object.keys(config.zoomSettings);
    let index = keys.findIndex(k => k === state.currentZoom);

    if (--index < 0) {
      index = keys.length - 1;
    }

    const currentZoom = keys[index] as Hotspot;
    return { currentZoom }
  }),
}));