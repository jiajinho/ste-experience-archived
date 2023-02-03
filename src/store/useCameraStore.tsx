import { create } from "zustand";
import { Camera } from "types";
import config from "config";

type Store = {
  data: Camera,
  goNext: () => void,
  goPrev: () => void
}

export default create<Store>((set) => ({
  data: config.cameras[0],
  goNext: () => set(state => {
    let index = config.cameras.findIndex(c => c === state.data);
    if (index === -1) return state;

    if (--index < 0) {
      index = config.cameras.length - 1;
    }

    return { data: config.cameras[index] }
  }),
  goPrev: () => set(state => {
    let index = config.cameras.findIndex(c => c === state.data);
    if (index === -1) return state;

    if (++index > config.cameras.length - 1) {
      index = 0;
    }

    return { data: config.cameras[index] }
  })
}));