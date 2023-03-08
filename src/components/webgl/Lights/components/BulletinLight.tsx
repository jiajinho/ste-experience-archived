import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import useDebug from '../useDebug';
import DebugBox from './DebugBox';

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

    light.current.target.position.x = -30;
    light.current.target.position.y = -35;
    light.current.target.position.z = 0;
    light.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        castShadow
        angle={0.46}
        penumbra={1}
        distance={11}
        position={[-1.72, 3.83, 0.19]}
        intensity={0.5}
      />

      <DebugBox
        ref={box}
        position={light.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}