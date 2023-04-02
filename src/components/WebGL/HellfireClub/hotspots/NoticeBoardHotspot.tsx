import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import useTriggerSpotlight from '@webgl/debug/hooks/useTriggerSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import WireframeBox from '@webgl/debug/WireframeBox';
import NoticeBoard from '../components/NoticeBoard';
import useRegisterHotspot from './useRegisterHotspot';

export default (props: JSX.IntrinsicElements["group"]) => {
  const spotlight = useRef<SpotLight>(null);

  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerSpotlight(spotlight, lightBox);
  const triggerZoom = useRegisterHotspot("bulletinBoard", cameraBox, cameraTarget);

  useAlignWireframeBox(spotlight, lightBox);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(-30, -45, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props}>
      <NoticeBoard onClick={triggerZoom} />

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