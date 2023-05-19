import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/cup.glb";
const mapUrl = "/static/texture/cup.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Cup: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group ref={ref} {...props}>
      <mesh castShadow geometry={nodes.Cup.geometry}>
        <meshPhongMaterial map={map} />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);