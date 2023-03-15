import { create } from "zustand";

type LoadObject = {
  webgl: {
    total?: number,
    loaded: number
  },
  html: {
    card: boolean
  }
}

type Store = LoadObject & {
  set: <T extends keyof LoadObject>(k: T, v: LoadObject[T]) => void
}


export default create<Store>((set) => ({
  webgl: {
    total: undefined,
    loaded: 0
  },
  html: {
    card: false
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