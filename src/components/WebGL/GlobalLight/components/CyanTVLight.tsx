import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from '@webgl/config';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import WireframeBox from '@webgl/debug/WireframeBox';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(5, -95, 55);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={spotlight}
        castShadow
        angle={0.38}
        penumbra={1}
        position={[-2.24, 3.32, 1.26]}
        intensity={3}
        distance={5}
        color={LightColor.Cyan}
      />

      <WireframeBox.Light
        ref={lightBox}
        position={spotlight.current?.position}
        onClick={triggerSpotlightControl}
      />
    </>
  )
}