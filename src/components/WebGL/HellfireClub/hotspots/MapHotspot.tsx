import React, { useEffect, useRef } from 'react';

import { LightColor } from '@hellfire/config';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';

import Map from '@hellfire/components/Map';
import WireframeBox from '@webgl/debug/WireframeBox';

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

  const triggerZoom = useRegisterHotspot("map", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(0, -5, -10);
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
      <Map onClick={handleClick} />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1, -1.14]}
        angle={0.47}
        intensity={2}
        distance={3}
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
        position={[0, 1, 0]}
        lookAt={[0, -1, 0]}
      />
    </group>
  )
}