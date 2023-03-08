import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { LightColor } from '../../config';
import useDebug from '../../useDebug';
import DebugBox from '../DebugBox';

export default ({ debug = false }: {
  debug?: boolean
}) => {
  const light = useRef<THREE.SpotLight>(null);
  const box = useRef<THREE.Mesh>(null);

  const triggerControl = useDebug(light, box);

  useEffect(() => {
    if (!light.current) return;
    light.current.target.position.x = 75;
    light.current.target.position.y = -5;
    light.current.target.position.z = -100;
    light.current.target.updateMatrixWorld();

    if (!box.current) return;
    box.current.position.x = light.current.position.x;
    box.current.position.y = light.current.position.y;
    box.current.position.z = light.current.position.z;
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        castShadow
        angle={0.75}
        penumbra={1}
        distance={6}
        position={[0.14, 0.3, 0]}
        intensity={1}
        color={LightColor.Coral}
      />

      {debug &&
        <DebugBox
          ref={box}
          position={light.current?.position}
          onClick={triggerControl}
        />
      }
    </>
  )
}