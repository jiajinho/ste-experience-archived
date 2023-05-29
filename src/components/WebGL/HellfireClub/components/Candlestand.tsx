import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    Candlestand: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const gltfUrl = useAssetEnvUrl('static/gltf/candlestand.glb');
  const colorMapUrl = useAssetEnvUrl('static/texture/lamp-color.jpg');
  const normalMapUrl = useAssetEnvUrl('static/texture/lamp-normal.jpg');

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