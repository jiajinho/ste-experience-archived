import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import DebugBox from './DebugBox';
import useDebug from '../useDebug';

export default () => {
  const light = useRef<THREE.SpotLight>(null);
  const box = useRef<THREE.Mesh>(null);

  const triggerControl = useDebug(light, box);

  useEffect(() => {
    if (!light.current) return;
    if (!box.current) return;

    box.current.position.x = light.current.position.x;
    box.current.position.y = light.current.position.y;
    box.current.position.z = light.current.position.z;

    light.current.target.position.x = -5;
    light.current.target.position.y = -55;
    light.current.target.position.z = -100;
    light.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        castShadow
        angle={0.16}
        penumbra={1}
        distance={15}
        position={[2.12, 2.02, -4.25]}
        intensity={1.8}
        color={0xa3a3a3}
      />

      <DebugBox
        ref={box}
        position={light.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}