import { useEffect } from 'react';
import * as THREE from 'three';

import useEnvStore from 'stores/useEnvStore';
import useDebugLightStore from 'stores/webgl/useDebugLightStore';

export default (ref: React.RefObject<THREE.SpotLight>, debug: React.RefObject<THREE.Mesh>) => {
  const env = useEnvStore(state => state.env);

  const setDebugLightStore = useDebugLightStore(state => state.set);

  useEffect(() => {
    if (env === "development") return;
    setDebugLightStore(null, null);
  }, [env]);

  const triggerControl = () => {
    if (env !== "development") return;
    setDebugLightStore(ref.current, debug.current);
  }

  return triggerControl
}