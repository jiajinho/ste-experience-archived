import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    ChandelierFlame: THREE.Mesh;
    Chandelier: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const gltfUrl = useAssetEnvUrl('static/gltf/chandelier.glb');
  const colorMapUrl = useAssetEnvUrl('static/texture/lamp-color.jpg');
  const normalMapUrl = useAssetEnvUrl('static/texture/lamp-normal.jpg');

  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  return (
    <group {...props} dispose={null}>
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