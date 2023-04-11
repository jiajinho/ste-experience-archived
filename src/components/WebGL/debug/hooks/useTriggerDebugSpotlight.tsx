import { useEffect } from 'react';
import * as THREE from 'three';

import useEnvStore from 'stores/useEnvStore';
import useDebugLightStore from 'stores/webgl/useDebugLightStore';

export default (spotlight: React.RefObject<THREE.SpotLight>, box: React.RefObject<THREE.Mesh>) => {
  const env = useEnvStore(state => state.env);

  const setDebugLightStore = useDebugLightStore(state => state.set);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!box.current) return;

    box.current.position.x = spotlight.current.position.x;
    box.current.position.y = spotlight.current.position.y;
    box.current.position.z = spotlight.current.position.z;
  }, []);

  useEffect(() => {
    if (env === "development") return;
    setDebugLightStore(null, null);
  }, [env]);

  const triggerControl = () => {
    if (env !== "development") return;
    setDebugLightStore(spotlight.current, box.current);
  }

  return triggerControl
}