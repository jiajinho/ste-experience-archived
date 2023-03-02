import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'store/useDebugLightStore';
import useDebug from '../useDebug';
import DebugBox from './DebugBox';

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

    ref.current.target.position.x = -30;
    ref.current.target.position.y = -100;
    ref.current.target.position.z = 0;
    ref.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <spotLight
        ref={ref}
        angle={Math.PI / 7}
        penumbra={1}
        distance={15}
        position={[-2.42, 5.6, 0]}
        intensity={1}
        power={10}
      />

      <DebugBox
        ref={debug}
        position={ref.current?.position}
        onClick={triggerControl}
      />
    </>
  )
}