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

    light.current.target.position.x = -20;
    light.current.target.position.y = -100;
    light.current.target.position.z = -10;
    light.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        angle={0.52}
        penumbra={1}
        distance={15}
        position={[-1.97, 5.6, -3.24]}
        intensity={1}
        power={5}
        color="#3DE7F4"
      />

      <DebugBox
        ref={box}
        position={light.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}