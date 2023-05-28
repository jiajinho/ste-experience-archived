import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/lamp.glb";
const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

type GLTFResult = GLTF & {
  nodes: {
    LampHead: THREE.Mesh;
    Lamp: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  colorMap.flipY = false;
  normalMap.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.LampHead.geometry}>
        <meshStandardMaterial
          metalness={0.3}
          roughness={0.7}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>

      <mesh castShadow geometry={nodes.Lamp.geometry}>
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.2}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);