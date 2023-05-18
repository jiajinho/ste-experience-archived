import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from 'config';
import useEnvStore from 'stores/useEnvStore';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import WireframeBox from '@webgl/debug/WireframeBox';
import useAnimation from './useAnimation';

export default () => {
  const env = useEnvStore(state => state.env);

  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  useAnimation(spotlight);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-5, -45, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={spotlight}
        castShadow
        angle={0.41}
        penumbra={1}
        position={[-2.42, 4.43, -2.05]}
        intensity={5.5}
        distance={9.66}
        color={LightColor.Cyan}
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