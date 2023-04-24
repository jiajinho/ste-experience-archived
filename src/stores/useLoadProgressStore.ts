import { create } from "zustand";

type LoadObject = {
  fps: {
    calibrating: boolean,
    completed: boolean
  }
  webgl: {
    total?: number,
    loaded: number
  },
  html: {
    cardTemplateBack?: boolean,
    cardTemplateFront?: boolean,
    hellfireFront?: boolean,
    hellfireBack?: boolean,
    theEncounterFront?: boolean,
    theEncounterBack?: boolean,
    whenWhereFront?: boolean,
    whenWhereBack?: boolean
  }
}

type Store = LoadObject & {
  set: <T extends keyof LoadObject>(k: T, v: LoadObject[T]) => void
}


export default create<Store>((set) => ({
  fps: {
    calibrating: true,
    completed: false
  },
  webgl: {
    total: undefined,
    loaded: 0
  },
  html: {
    cardTemplateBack: false,
    cardTemplateFront: false,
    hellfireFront: false,
    hellfireBack: false,
    theEncounterFront: false,
    theEncounterBack: false,
    whenWhereFront: false,
    whenWhereBack: false
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