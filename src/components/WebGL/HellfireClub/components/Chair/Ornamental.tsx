import React from "react";
import { sRGBEncoding } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    WoodChair: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const gltfUrl = useAssetEnvUrl('static/gltf/chair-ornamental.glb');
  const mapUrl = useAssetEnvUrl('static/texture/wood.jpg');

  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;
  map.encoding = sRGBEncoding;

  materials.wood.map = map;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.WoodChair.geometry}
        material={materials.wood}
      />
    </group>
  );
}