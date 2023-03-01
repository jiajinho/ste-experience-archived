import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';
import useEnvStore from 'store/useEnvStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const ref = useRef<THREE.SpotLight>(null);

  //@ts-ignore
  useHelper(env === "development" ? ref : null, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    if (!ref.current) return;

    ref.current.target.position.x = -30;
    ref.current.target.position.y = -100;
    ref.current.target.position.z = 0;
  }, []);

  return (
    <spotLight
      ref={ref}
      angle={Math.PI / 7}
      penumbra={1}
      distance={15}
      position={[-2.42, 5.6, 0]}
      intensity={1}
      power={10}
    />
  )
}