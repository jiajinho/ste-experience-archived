import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useEnvStore from 'stores/useEnvStore';
import WireframeBox from '@webgl/debug/WireframeBox';

export default () => {
  const env = useEnvStore(state => state.env);

  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(0, 0, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={spotlight}
        castShadow
        angle={0.79}
        penumbra={1}
        distance={15}
        position={[5, 5, 5]}
        intensity={0.7}
        color="#ff927c"
      />

      {(env === "development" || env === "staging") &&
        <WireframeBox.Light
          ref={lightBox}
          position={spotlight.current?.position}
          onClick={triggerSpotlightControl}
        />
      }
    </>
  )
}