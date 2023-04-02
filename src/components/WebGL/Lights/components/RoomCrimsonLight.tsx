import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from '../config';

import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

export default () => {
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  const triggerControl = useTriggerDebugSpotlight(spotlight, lightBox);

  useAlignWireframeBox(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

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
        color={LightColor.Coral}
      />

      <WireframeBox.Light
        ref={lightBox}
        position={spotlight.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}