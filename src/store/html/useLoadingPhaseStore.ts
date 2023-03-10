import { create } from "zustand";

import type { STEncounterPhase, HellfireCardPhase, TypewriterPhase } from "@html/LoadingTutorial/types";

type Phases = {
  ste: STEncounterPhase,
  card: HellfireCardPhase,
  typewriter: TypewriterPhase
}

type Store = Phases & {
  set: <T extends keyof Phases>(key: T, value: Phases[T]) => void
}

export default create<Store>((set) => ({
  ste: "idle",
  card: "idle",
  typewriter: "idle",
  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}))