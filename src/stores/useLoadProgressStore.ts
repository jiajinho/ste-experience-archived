import { create } from "zustand";
import { Merch } from "@/types";

type LoadObject = {
  fps: {
    calibrating: boolean,
    completed: boolean,
    progress: number, //0-1
  },
  html: {
    cardTemplateBack: boolean,
    cardTemplateFront: boolean,
    hellfireFront: boolean,
    hellfireBack: boolean,
    theEncounterBack: boolean,
    whenWhereBack: boolean,
  } | {
    [k in Merch]: boolean
  },
  misc: {
    bgm: boolean,
    eventVideo: boolean
  }
}

type Store = LoadObject & {
  set: <T extends keyof LoadObject>(k: T, v: Partial<LoadObject[T]>) => void
}


export default create<Store>((set) => ({
  fps: {
    calibrating: false,
    completed: false,
    progress: 0,
  },
  html: {
    cardTemplateBack: false,
    cardTemplateFront: false,
    hellfireFront: false,
    hellfireBack: false,
    theEncounterBack: false,
    whenWhereBack: false,

    merchVecna: false,
    merchEleven: false,
    merchBag: false,
    merchCap: false,
    merchDenim: false,
    merchMug: false,
    merchShirt: false,
    merchVHS: false,
    merchVinyl: false,
  },
  misc: {
    bgm: false,
    eventVideo: false
  },

  set: (k, v) => set((state) => {
    const clone = JSON.parse(JSON.stringify(state));

    for (const [a, b] of Object.entries(v)) {
      //@ts-ignore
      clone[k][a] = b;
    }

    return clone;
  })
}));