import { create } from "zustand";

type Store = {
  mute: boolean,
  set: (mute: boolean) => void,
}

export default create<Store>((set) => ({
  mute: false,
  set: (mute) => set(() => ({
    mute
  }))
}));