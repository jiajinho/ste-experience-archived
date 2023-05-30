import React from 'react';
import Rift from '@hellfire/components/Rift';
import { useGLTF } from '@react-three/drei';

import { GLTFResult } from '../components/Rift/types';
import useAssetEnvUrl from '@/hooks/common/useAssetEnvUrl';

export default () => {
  const url = useAssetEnvUrl('static/gltf/rifts-mini.glb');

  const { materials } = useGLTF(url) as any as GLTFResult;

  materials.Rift.toneMapped = false;
  materials.Rift.emissiveIntensity = 2.5;

  return (
    <>
      <Rift.A
        position={[-3.19, 1.3, -0.7]}
        rotation={[-0.85, -Math.PI / 2, 0]}
        scale={0.57}
      />

      <Rift.B
        position={[1.32, 2.03, -4.8]}
        rotation={[0, Math.PI, -0.53]}
        scale={1.38}
      />

      <Rift.B
        position={[-3.11, 0.77, 2.5]}
        rotation={[0, -Math.PI / 2, -0.83]}
        scale={0.6}
      />

      <Rift.A
        position={[-2.85, 2.05, -3.13]}
        rotation={[0, 4.7, 1.83]}
        scale={0.81}
      />
    </>
  );
}