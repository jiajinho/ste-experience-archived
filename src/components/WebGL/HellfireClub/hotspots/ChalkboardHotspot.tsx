import React, { useEffect, useRef } from 'react';
import { SpotLight } from 'three';

import useDebugSpotlight from '@webgl/debug/hooks/useDebugSpotlight';
import useAlignWireframeBox from '@webgl/debug/hooks/useAlignWireframeBox';

import WireframeBox from '@webgl/debug/WireframeBox';
import ChalkBoard from '@hellfire/components/ChalkBoard';

export default (props: JSX.IntrinsicElements["group"]) => {
  const spotlight = useRef<SpotLight>(null);
  const box = useRef<THREE.Mesh>(null);

  const triggerControl = useDebugSpotlight(spotlight, box);
  useAlignWireframeBox(spotlight, box);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!box.current) return;

    spotlight.current.target.position.set(-10, -10, -15);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props}>
      <ChalkBoard
        hotspot="standingBoard"
      />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1, 1]}
        angle={0.47}

      />

      <WireframeBox.Light
        ref={box}
        position={spotlight.current?.position}
        onClick={triggerControl}
      />
    </group>
  )
}