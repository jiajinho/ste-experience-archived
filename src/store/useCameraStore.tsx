import { create } from "zustand";
import config from "config";

type Store = {
  targetObject: THREE.Group | null,
  cameraPosition: THREE.Vector3,
  set: (targetObject: THREE.Group | null, cameraPosition: THREE.Vector3) => void
}

export default create<Store>((set) => ({
  targetObject: null,
  cameraPosition: config.camera.default.position,
  set: (targetObject, cameraPosition) => set(() => ({
    targetObject,
    cameraPosition
  }))
}));