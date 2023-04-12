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
        position={[-3.1, 0.75, -0.62]}
        rotation={[-0.85, -Math.PI / 2, 0]}
        scale={1.2}
      />

      <Rift.B
        material={materials.Rift}
        position={[0.76, 2.44, -4.8]}
        rotation={[0, Math.PI, -0.53]}
        scale={2}
      />

      <Rift.B
        material={materials.Rift}
        position={[-3.11, 1.52, 2.35]}
        rotation={[0, -Math.PI / 2, -0.83]}
        scale={0.6}
      />

      <Rift.A
        material={materials.Rift}
        position={[-1.26, 3.54, -4.4]}
        rotation={[0, Math.PI, 1.11]}
        scale={0.5}
      />
    </>
  );

}

useGLTF.preload(url);