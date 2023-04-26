import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

import { GLTFResult } from '@hellfire/components/Rift/types';
import Rift from '@hellfire/components/Rift';

const url = "/static/gltf/rifts-mini.glb";

export default () => {
  const { materials } = useGLTF(url) as any as GLTFResult;

  useMemo(() => {
    materials.Rift.toneMapped = false;
    materials.Rift.emissiveIntensity = 8;
  }, [materials]);

  return (
    <>
      <Rift.A
        material={materials.Rift}
        position={[-3.15, 1.17, -0.7]}
        rotation={[-0.85, -Math.PI / 2, 0]}
        scale={0.57}
      />

      <Rift.B
        material={materials.Rift}
        position={[1.32, 2.03, -4.8]}
        rotation={[0, Math.PI, -0.53]}
        scale={1.38}
      />

      <Rift.B
        material={materials.Rift}
        position={[-3.11, 1.52, 2.35]}
        rotation={[0, -Math.PI / 2, -0.83]}
        scale={0.6}
      />

      <Rift.A
        material={materials.Rift}
        position={[-2.85, 2.05, -3.13]}
        rotation={[0, 4.7, 1.83]}
        scale={0.81}
      />
    </>
  );

}

useGLTF.preload(url);