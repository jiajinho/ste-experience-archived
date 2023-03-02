import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'store/useDebugLightStore';
import DebugBox from './DebugBox';
import useDebug from '../useDebug';

export default () => {
  const light = useDebugLightStore(state => state.light);

  const ref = useRef<THREE.SpotLight>(null);
  const debug = useRef<THREE.Mesh>(null);

  const triggerControl = useDebug(ref, debug);

  //@ts-ignore
  useHelper(light && light.uuid === ref.current?.uuid && ref, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    if (!ref.current) return;
    if (!debug.current) return;

    debug.current.position.x = ref.current.position.x;
    debug.current.position.y = ref.current.position.y;
    debug.current.position.z = ref.current.position.z;

    ref.current.target.position.x = -40;
    ref.current.target.position.y = -100;
    ref.current.target.position.z = 0;
    ref.current.target.updateMatrixWorld();

  }, []);

  return (
    <>
      <spotLight
        ref={ref}
        angle={0.32}
        penumbra={1}
        distance={15}
        position={[-1.46, 3.76, 3.06]}
        intensity={1}
        power={2.8}
      />

      <DebugBox
        ref={debug}
        position={ref.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}