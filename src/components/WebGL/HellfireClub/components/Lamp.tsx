import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    LampHead: THREE.Mesh;
    Lamp: THREE.Mesh;
  };
};

const gltfUrl = getAssetEnvUrl('static/gltf/lamp.glb');
const colorMapUrl = getAssetEnvUrl('static/texture/lamp-color.jpg');
const normalMapUrl = getAssetEnvUrl('static/texture/lamp-normal.jpg');

useGLTF.preload(gltfUrl);
useTexture.preload(colorMapUrl);
useTexture.preload(normalMapUrl);

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