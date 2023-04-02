import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';
import WireframeBox from '@webgl/debug/WireframeBox';

import NoticeBoard from '@hellfire/components/NoticeBoard';
import useRegisterHotspot from '@hellfire/hotspots/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  useAlignWireframeBox(spotlight, lightBox);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("bulletinBoard", cameraBox, cameraTarget);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(-30, -45, 0);
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
      <NoticeBoard onClick={handleClick} />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[1.52, 2.68, 0]}
        angle={0.38}
        intensity={0.35}
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