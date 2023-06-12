import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    Candlestand: THREE.Mesh;
  };
};

const gltfUrl = getAssetEnvUrl('static/gltf/candlestand.glb');
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
      <mesh
        geometry={nodes.CandlestandFlame.geometry}
        material={materials.bulb.yellow}
      />

      <mesh castShadow geometry={nodes.Candlestand.geometry}>
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.2}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>
    </group>
  );
}