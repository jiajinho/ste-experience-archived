import { create } from "zustand";
import type { STEncounterPhase, HellfireCardPhase, TypewriterPhase, ProgressPhase, MaskPhase } from "@html/LoadingTutorial/types";

type Phases = {
  mask: MaskPhase,
  progress: ProgressPhase,
  ste: STEncounterPhase,
  card: HellfireCardPhase,
  typewriter: TypewriterPhase
}

type Store = Phases & {
  set: <T extends keyof Phases>(key: T, value: Phases[T]) => void
}

export default create<Store>((set) => ({
  mask: "dark",
  progress: "standby",
  ste: "standby",
  card: "standby",
  typewriter: "standby",
  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}))