import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";

const gltfUrl = "/static/gltf/chandelier.glb";
const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

type GLTFResult = GLTF & {
  nodes: {
    ChandelierFlame: THREE.Mesh;
    Chandelier: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.ChandelierFlame.geometry}
        material={materials.bulb.yellow}
      />

      <mesh castShadow geometry={nodes.Chandelier.geometry}>
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.3}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);