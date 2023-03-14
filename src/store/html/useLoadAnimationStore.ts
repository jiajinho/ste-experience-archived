import { create } from "zustand";
import type { STEncounterPhase, HellfireCardPhase, TypewriterPhase, ProgressPhase, MaskPhase, WrapperPhase } from "@html/LoadingTutorial/types";

type Phases = {
  wrapper: WrapperPhase,
  mask: MaskPhase,
  progress: ProgressPhase,
  ste: STEncounterPhase,
  card: HellfireCardPhase,
  typewriter: TypewriterPhase,

  renderPage: boolean //Determine if need to remove the loading/tutorial page
}

type Store = Phases & {
  set: <T extends keyof Phases>(key: T, value: Phases[T]) => void
}

export default create<Store>((set) => ({
  wrapper: "standby",
  mask: "dark",
  progress: "standby",
  ste: "standby",
  card: "standby",
  typewriter: "standby",
  renderPage: true,

  set: (k, v) => set((state) => {
    const clone = { ...state };

    //@ts-ignore
    clone[k] = v;
    return clone;
  })
}))