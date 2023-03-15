import { create } from "zustand";

type NodeEnv = "development" | "production" | "staging";

type Store = {
  env: NodeEnv,
  set: (e: NodeEnv) => void
}

export default create<Store>((set) => ({
  env: process.env.NEXT_PUBLIC_NODE_ENV as NodeEnv,
  set: (e) => set(() => ({
    env: e
  }))
}));