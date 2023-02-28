import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { SpotLight, useGLTF, useHelper } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import config from '../../config';
import { useControls } from "leva";

const url = "/static/gltf/ceiling-light-bulb.glb";

type GLTFResult = GLTF & {
  nodes: {
    CeilingLightBulb: THREE.Mesh;
    CeilingLightCup: THREE.Mesh;
  }
};

export default ({ light, ...props }: {
  light?: number
} & JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const ref = useRef<THREE.SpotLight>(null);

  //@ts-ignore
  useHelper(ref, THREE.SpotLightHelper, light);

  const { attenuation, anglePower } = useControls({
    attenuation: { min: 0, max: 5, value: 5, step: 0.01 },
    anglePower: { min: 0, max: 5, value: 0, step: 0.01 },
  })

  useEffect(() => {
    if (!light) return;
    if (!ref.current) return;

    const placeholder = new THREE.Object3D();
    placeholder.position.x = 100;
    placeholder.position.y = -90;
    placeholder.position.z = 0;

    ref.current.target = placeholder;
  }, [light]);


  return (
    <group
      {...props}
      dispose={null}
    >

      <mesh geometry={nodes.CeilingLightBulb.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          color={light || "black"}
          emissive={light || undefined}
        />
      </mesh>

      {light &&
        <SpotLight
          ref={ref}
          position={[0.08, -0.1, -0.01]}
          distance={10}
          angle={0.3}
          penumbra={1}
          attenuation={attenuation}
          anglePower={anglePower}
          color={light}
        />
      }

      <mesh
        geometry={nodes.CeilingLightCup.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);