import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Page: THREE.Mesh;
  };
};

const gltfUrl = getAssetEnvUrl('static/gltf/page.glb');
const mapUrl = getAssetEnvUrl('static/texture/page/demogorgon.jpg');

useGLTF.preload(gltfUrl);
useTexture.preload(mapUrl);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Page.geometry}>
        <meshPhongMaterial map={map} />
      </mesh>
    </group>
  );
}