import React, { useEffect } from 'react';
import gsap from 'gsap';

import Rift from '@hellfire/components/Rift';
import { useGLTF } from '@react-three/drei';
import { GLTFResult } from '@hellfire/components/Rift/types';


const url = "/static/gltf/rifts-mini.glb";

export default () => {

  const { materials } = useGLTF(url) as any as GLTFResult;

  useEffect(() => {
    if (!materials) return;

    materials.Rift.toneMapped = false;
    materials.Rift.emissiveIntensity = 8;

    const tween = gsap.to(materials.Rift, {
      duration: 2.5,
      ease: "power2.inOut",
      emissiveIntensity: 15,
      yoyo: true,
      repeat: -1,
    });

    return () => { tween.kill() }
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