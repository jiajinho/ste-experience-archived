import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import WireframeBox from '@webgl/debug/WireframeBox';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import ChalkBoard from '@hellfire/components/ChalkBoard';
import useRegisterHotspot from './useRegisterHotspot';

export default (props: JSX.IntrinsicElements["group"]) => {
  const spotlight = useRef<SpotLight>(null);

  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerZoom = useRegisterHotspot("standingBoard", cameraBox, cameraTarget);

  useAlignWireframeBox(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(-10, -10, -15);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props}>
      <ChalkBoard onClick={triggerZoom} />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1, 1]}
        angle={0.47}
      />

      <WireframeBox.Light
        ref={lightBox}
        position={spotlight.current?.position}
        onClick={triggerControl}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={[0, 0, 1]}
        lookAt={[0, 0, -1]}
      />
    </group>
  )
}