import { create } from "zustand";
import type { Event } from "@html/CardOverlay/types";

type Store = {
  event: Event
  set: (e: Event) => void
}

export default create<Store>((set) => ({
  event: undefined,
  set: (v) => set({
    event: v
  })
}));