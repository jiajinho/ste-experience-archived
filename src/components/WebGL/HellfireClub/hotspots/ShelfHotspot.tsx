import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import Shelf from '@hellfire/components/Shelf';
import useRegisterHotspot from '@hellfire/hotspots/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  useAlignWireframeBox(spotlight, lightBox);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("shelf", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(1, -35, -20);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  /**
   * Not hook
   */
  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <Shelf onClick={handleClick} />

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