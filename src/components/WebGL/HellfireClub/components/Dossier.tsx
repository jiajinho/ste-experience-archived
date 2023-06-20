import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Dossier: THREE.Mesh;
  };
};

const gltfUrl = getAssetEnvUrl('static/gltf/dossier.glb');
const mapUrl = getAssetEnvUrl('static/texture/dossier.jpg');

useGLTF.preload(gltfUrl);
useTexture.preload(mapUrl);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Dossier.geometry}>
        <meshPhongMaterial map={map} />
      </mesh>
    </group>
  );
}