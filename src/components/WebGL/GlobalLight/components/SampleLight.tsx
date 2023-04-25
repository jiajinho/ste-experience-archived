import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

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
        distance={17}
        position={[-2.42, 4.43, -2.05]}
        intensity={2.9}
        color="#2caec1"
      />

      <WireframeBox.Light
        ref={lightBox}
        position={spotlight.current?.position}
        onClick={triggerSpotlightControl}
      />
    </>
  )
}