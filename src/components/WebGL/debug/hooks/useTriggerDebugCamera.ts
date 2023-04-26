import React from 'react';

import { Camera } from 'types';
import useEnvStore from 'stores/useEnvStore';
import useDebugCameraStore from 'stores/webgl/useDebugCameraStore';

export default (box: React.RefObject<THREE.Object3D>, target: React.RefObject<THREE.Object3D>, hotspot: Camera.Hotspot) => {
  const env = useEnvStore(state => state.env);
  const setDebugCameraStore = useDebugCameraStore(state => state.set);

  const triggerControl = () => {
    if (env !== "development") return;
    setDebugCameraStore("box", box.current);
    setDebugCameraStore("target", target.current);
    setDebugCameraStore("hotspot", hotspot);
  }

  return triggerControl;
}