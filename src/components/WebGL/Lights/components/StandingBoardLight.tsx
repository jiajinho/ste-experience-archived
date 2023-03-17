import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from '../config';
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

    light.current.target.position.x = -30;
    light.current.target.position.y = -70;
    light.current.target.position.z = -45;
    light.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        castShadow
        angle={0.18}
        penumbra={1}
        distance={15}
        position={[-0.67, 5.05, -1.01]}
        intensity={1.5}
        color={LightColor.BrightRed}
      />

      <DebugBox
        ref={box}
        position={light.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}