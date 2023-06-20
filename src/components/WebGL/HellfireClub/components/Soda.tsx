import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Soda: THREE.Mesh;
  };
};

const gltfUrl = getAssetEnvUrl('static/gltf/soda.glb');
const mapUrl = getAssetEnvUrl('static/texture/soda.jpg');

useGLTF.preload(gltfUrl);
useTexture.preload(mapUrl);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Soda.geometry}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}