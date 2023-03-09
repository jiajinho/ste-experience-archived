import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import config from '../../config';

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

      <mesh
        geometry={nodes.CeilingLightCup.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);