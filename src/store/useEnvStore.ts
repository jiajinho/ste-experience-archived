import { create } from "zustand";

type NodeEnv = "development" | "production" | "test";

type Store = {
  env: NodeEnv,
  set: (e: NodeEnv) => void
}

export default create<Store>((set) => ({
  env: process.env.NODE_ENV,
  set: (e) => set(() => ({
    env: e
  }))
}));