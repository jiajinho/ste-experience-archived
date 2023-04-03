import React from 'react';

import useEnvStore from 'stores/useEnvStore';
import useDebugCameraStore from 'stores/webgl/useDebugCameraStore';

export default (box: React.RefObject<THREE.Object3D>, target: React.RefObject<THREE.Object3D>) => {
  const env = useEnvStore(state => state.env);
  const setDebugCameraStore = useDebugCameraStore(state => state.set);

  const triggerControl = () => {
    if (env !== "development") return;
    setDebugCameraStore("box", box.current);
    setDebugCameraStore("target", target.current);
  }

  return triggerControl;
}