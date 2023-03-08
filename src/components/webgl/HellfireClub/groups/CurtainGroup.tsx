import React, { useMemo } from 'react';
import * as THREE from 'three';

import Curtain from '@hellfire/components/Curtain';

export default () => {
  const clothMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    roughness: 0.6,
    metalness: 0.3,
    color: "#555555"
  }), []);

  return (
    <>
      <Curtain.Large
        material={clothMaterial}
        position={[-3.14, 2.53, -2.76]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Large
        material={clothMaterial}
        position={[-3.14, 2.52, 3.06]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Classic
        material={clothMaterial}
        position={[2.57, 2.5, -4.8]}
      />

      <Curtain.Classic
        material={clothMaterial}
        position={[4.21, 2.46, -3.13]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        material={clothMaterial}
        position={[-2.17, 2.52, -4.8]}
      />
    </>
  );
}