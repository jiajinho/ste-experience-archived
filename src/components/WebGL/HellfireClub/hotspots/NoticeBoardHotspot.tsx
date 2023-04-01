import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import useTriggerSpotlight from '@webgl/debug/hooks/useTriggerSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import WireframeBox from '@webgl/debug/WireframeBox';
import NoticeBoard from '../components/NoticeBoard';

export default (props: JSX.IntrinsicElements["group"]) => {
  const spotlight = useRef<SpotLight>(null);
  const box = useRef<THREE.Mesh>(null);

  const triggerControl = useTriggerSpotlight(spotlight, box);
  useAlignWireframeBox(spotlight, box);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!box.current) return;

    spotlight.current.target.position.set(-30, -45, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props}>
      <NoticeBoard
        hotspot="bulletinBoard"
      />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[1.52, 2.68, 0]}
        angle={0.38}
        intensity={0.35}
      />

      <WireframeBox.Light
        ref={box}
        position={spotlight.current?.position}
        onClick={triggerControl}
      />
    </group>
  )
}