import { useEffect } from 'react';
import * as THREE from 'three';

import useEnvStore from 'stores/useEnvStore';
import useDebugLightStore from 'stores/webgl/useDebugLightStore';

export default (ref: React.RefObject<THREE.SpotLight>, debug: React.RefObject<THREE.Mesh>) => {
  const env = useEnvStore(state => state.env);

  const set = useDebugLightStore(state => state.set);

  useEffect(() => {
    if (env === "development") return;
    set(null, null);
  }, [env]);

  const triggerControl = () => {
    if (env !== "development") return;
    set(ref.current, debug.current);
  }

  return triggerControl
}