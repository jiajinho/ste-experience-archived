import { create } from 'zustand';
import { Viewport } from '@/types';

type StoreSchema = { [v in keyof Viewport]: boolean } & {
  set: (viewports: { [k in keyof Viewport]?: boolean }) => void
}

export default create<StoreSchema>((set) => ({
  sm: false,
  md: false,
  lg: false,
  set: (viewports) => set(state => {
    const clone = { ...state };

    for (const [k, v] of Object.entries(viewports)) {
      clone[k as keyof Viewport] = v;
    }

    return clone;
  })
}));