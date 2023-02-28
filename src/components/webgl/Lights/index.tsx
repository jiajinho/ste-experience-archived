import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

export default () => {
  const ref = useRef<THREE.SpotLight>(null);

  //@ts-ignore
  useHelper(ref, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    if (!ref.current) return;

    ref.current.target.position.x = -30;
    ref.current.target.position.y = -100;
    ref.current.target.position.z = 0;
  }, []);

  return (
    <>
      <ambientLight intensity={0.15} />

      <spotLight
        ref={ref}
        angle={Math.PI / 7}
        penumbra={1}
        distance={15}
        position={[-2.42, 5.6, 0]}
      />
    </>
  )
}