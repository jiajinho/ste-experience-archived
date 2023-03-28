import { create } from "zustand";

import type { Hotspot } from "types";
import config from "config";

type State = {
  camera?: THREE.PerspectiveCamera,
  shadowCamera?: THREE.PerspectiveCamera,
  cameraPan: boolean,
  currentZoom: Hotspot,
  canvas?: HTMLDivElement
}

type Store = State & {
  set: <T extends keyof State>(key: T, value: State[T]) => void

  goNextZoom: () => void,
  goPrevZoom: () => void
}

export default create<Store>((set) => ({
  //#region Basic states
  camera: undefined,
  shadowCamera: undefined,
  cameraPan: false,
  currentZoom: "default",
  canvas: undefined,

  set: (key, value) => set((state) => {
    const clone = { ...state };
    //@ts-ignore
    clone[key] = value;

    return clone;
  }),
  //#endregion

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