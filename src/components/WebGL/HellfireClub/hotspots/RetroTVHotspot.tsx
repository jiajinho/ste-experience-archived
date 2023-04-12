import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from '@hellfire/config';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';

import WireframeBox from '@webgl/debug/WireframeBox';
import RetroTV from '@hellfire/components/RetroTV';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("retroTV", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(-30, -50, 0);
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
      <RetroTV onClick={handleClick} />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[1.52, 2.68, 0]}
        angle={0.24}
        intensity={3.6}
        distance={5}
        color={LightColor.Crimson}
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