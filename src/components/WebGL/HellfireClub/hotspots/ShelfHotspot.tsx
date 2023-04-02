import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerSpotlight from '@webgl/debug/hooks/useTriggerSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import Shelf from '@hellfire/components/Shelf';
import useRegisterHotspot from '@hellfire/hotspots/useRegisterHotspot';

export default (props: JSX.IntrinsicElements["group"]) => {
  const spotlight = useRef<THREE.SpotLight>(null);

  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerSpotlight(spotlight, lightBox);
  const triggerZoom = useRegisterHotspot("shelf", cameraBox, cameraTarget);

  useAlignWireframeBox(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(1, -35, -20);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props}>
      <Shelf onClick={triggerZoom} />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[1.02, 2, 0]}
        angle={0.42}
        intensity={0.5}
      />

      <WireframeBox.Light
        ref={lightBox}
        position={spotlight.current?.position}
        onClick={triggerSpotlightControl}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={[1, 0, 0]}
        lookAt={[-1, 0, 0]}
      />
    </group>
  )
}