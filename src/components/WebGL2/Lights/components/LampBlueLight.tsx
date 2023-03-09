import { SpotLight } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useContext, useEffect, useRef } from 'react';
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

    light.current.target.position.x = -35;
    light.current.target.position.y = -100;
    light.current.target.position.z = -40;
    light.current.target.updateMatrixWorld();
  }, []);

  const { anglePower, attenuation } = useControls({
    anglePower: { min: 0.1, max: 10, step: 0.01, value: 0.1 },
    attenuation: { min: 0.1, max: 10, step: 0.01, value: 0.1 },
  });

  return (
    <>
      <SpotLight
        ref={light}
        castShadow
        angle={0.52}
        anglePower={anglePower}
        attenuation={attenuation}
        penumbra={1}
        distance={15}
        position={[-0.36, 6.39, -1.05]}
        intensity={1}
        power={4}
        color="#45E9FF"
      />

      <DebugBox
        ref={box}
        position={light.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}